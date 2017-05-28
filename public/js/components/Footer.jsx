import React from '../../node_modules/react';

import JobsList from './jobs/JobsList.jsx';
import Header from './Header.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            tarefasActive: this.props.bodyState
        }
    }

    handleClick() {
        this.setState({
            tarefasActive: !this.state.tarefasActive
        });
    }

    render() {
        if (this.state.tarefasActive === true){
            return (
                <div className="thisFooter" id="Tobottom">
                    <div className="container">
                        <div className="row thisFooter" >
                            <div className="col-lg-3 col-xs-0 ">
                            </div>
                            <div className="col-lg-3 col-xs-6" id="footerLeft">
                                <div className="footerLeft">
                                    <div className="FooterText">
                                        Tarefas
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xs-6" id="footerRight">
                                <div className="footerRight">
                                    <div className="FooterText">
                                        Histórico
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xs-0">
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (

            <div className="thisFooter" id="Tobottom">
                <div className="container">
                    <div className="row thisFooter" >
                        <div className="col-lg-3 col-xs-0 ">
                        </div>
                        <div className="col-lg-3 col-xs-6" id="footerLeft">
                            <div className="footerLeft">
                                 <div className="FooterText">
                                    Tarefas
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6" id="footerRight">
                            <div className="footerRight">
                                <div className="FooterText">
                                    Histórico
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-0">
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default Footer;