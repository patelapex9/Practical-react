import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route,Switch,withRouter,} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import TraditionalRoutes from './traditional';
import FractionalRoutes from './fractional';
import Login from '../components/Login';  
import Logout from '../components/Logout';  
import ForgotPassword from '../components/ForgotPassword';  
import ChangePassword from '../components/Users/ChangePassword';  
import Thankyou from '../components/Thankyou';  
import Profile from '../components/Users/Profile';


class Routes extends Component {
    
    constructor(args) {
        super(args);
    }
    
    render() {
        const { auth } = this.props;
        window.scrollTo(0, 0);
        // const path = this.props.location.pathname;
        // const firstRoute = path.split("/");
        // const matchPath = firstRoute[1];
        
        return(
            
            <Switch>                
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Route path="/thank-you" exact component={Thankyou}/>
                    {/* <Route path={"/" + matchPath+ "/change-password"} component={ChangePassword}/> */}
                    <Route path="/forgot-password" exact component={ForgotPassword}/>
                    {/* <Route path={"/"+ matchPath +"/my-profile"} exact component={Profile} /> */}
                    {/* { matchPath =='traditional' ? <TraditionalRoutes action={this.handler} /> : '' }
                    { matchPath =='fractional' ? <FractionalRoutes action={this.handler} /> : '' } */}
                    
                    
            </Switch>
          
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
  
