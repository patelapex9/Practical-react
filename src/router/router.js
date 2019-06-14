import React, { Component,  lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Main Website Flow
import MainWebsite from './mainWebsite';

class Router extends Component {

    constructor(args) {
        super(args);
        this.state = {  }
    }

    render() {
        
        
        return (
            <div>
                <div >
                    <BrowserRouter>                       
                        <Switch>
                            <MainWebsite />                         
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Router)