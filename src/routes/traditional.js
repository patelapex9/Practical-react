import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, } from 'react-router-dom';

import Home from '../components/Traditional/Home/Home';
import Listing from '../components/Traditional/Properties/Listing';
import Details from '../components/Traditional/Properties/Details';
import Faq from '../components/Traditional/Faq';
import Contactus from '../components/Traditional/Contactus';
import About from '../components/Traditional/About';
import Howitworks from '../components/Traditional/Howitworks';
import Leaders from '../components/Traditional/Leaders';
import Privacy from '../components/Traditional/Privacy';
import Terms from '../components/Traditional/Terms';
import Dashboard from '../components/Traditional/Dashboard';




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
            this.state.headerMain = this.state.headerMain +" main--header";
        }
        else{
            this.state.headerMain = "tf traditional";
            window.scrollTo(10, 10);
        }   


        return (
            <div className={this.state.headerMain}>
                <Switch>
                    <Route path="/traditional" exact component={Home} />
                    <div style={{ background: 'white' }}>
                        <Route path="/traditional/properties" exact component={Listing} />
                        <Route path="/traditional/property-detail/:id" exact component={Details} />
                        <Route path="/traditional/faq" exact component={Faq} />
                        <Route path="/traditional/contact-us" exact component={Contactus} />
                        <Route path="/traditional/about-us" exact component={About} />
                        <Route path="/traditional/how-it-works" exact component={Howitworks} />                        
                        <Route path="/traditional/leaders" exact component={Leaders} />
                        <Route path="/traditional/leaders" exact component={Leaders} />                        
                        <Route path="/traditional/privacy-policy" exact component={Privacy}/>
                        <Route path="/traditional/terms-and-condition" exact component={Terms}/>
                        <Route path="/traditional/dashboard" exact component={Dashboard}/>
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

