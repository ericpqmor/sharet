/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const exphbs  = require('express-handlebars');
const winston = require('winston');
const routes = require('./routes');
const seedDB = require("./seeds");
const Job = require("./models/job");
const User = require("./models/user");
const History = require("./models/history");
const nodemailer = require("nodemailer");

//requiring routes
const jobRoutes = require("./routes/jobs"),
      historyRoutes = require("./routes/history"),
      indexRoutes = require("./routes/index"),
      assignedRoutes = require("./routes/assigned"),
      userRoutes = require("./routes/users");

mongoose.connect("mongodb://ericpqmor:81160709@ds155811.mlab.com:55811/sharet");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(methodOverride("_method"));
app.use(flash());

//seed the db
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "sharet",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dashboard', express.static('./public'));

//Loading all the routes
app.use("/", indexRoutes);
app.use("/jobs", jobRoutes);
app.use("/history", historyRoutes);
app.use("/jobs/:id/assigned", assignedRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Starting Sharet Server");
});


