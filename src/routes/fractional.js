import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, } from 'react-router-dom';

import Home from '../components/Fractional/Home/Home';
import Listing from '../components/Fractional/Properties/Listing';
import Details from '../components/Fractional/Properties/Details';
import Faq from '../components/Fractional/Faq';
import Contactus from '../components/Fractional/Contactus';
import About from '../components/Fractional/About';
import Howitworks from '../components/Fractional/Howitworks';
import Resale from '../components/Fractional/Resale';
import Leaders from '../components/Fractional/Leaders';
import Privacy from '../components/Fractional/Privacy';
import Terms from '../components/Fractional/Terms';
import Dashboard from '../components/Fractional/Dashboard';

// to check for logged in status, will route to /login if no jwt found
import PrivateRoute from '../components/common/PrivateRoute';


class Routes extends Component {
    constructor(args) {
        super(args);
        this.state = {       
            headerMain:"tf"
        }
    }
    render() {
        const { auth } = this.props;
        window.scrollTo(0, 0);
        const uriParams = window.location.href.split(window.location.origin);
        if(uriParams[1] == '/fractional' || uriParams[1] == '/traditional') {                        
            this.state.headerMain = this.state.headerMain +" main--header" + " pageblue";
        }
        else{
            this.state.headerMain = "tf fractional";
            window.scrollTo(10, 10);
        }   

        return (
            <div className={this.state.headerMain}>
                <Switch>
                    <Route path="/fractional" exact component={Home} />
                    <div style={{background: 'white' }}>
             
                    </div>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = {}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes));

