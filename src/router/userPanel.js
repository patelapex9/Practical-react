import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import AclRouter from 'react-acl-router';
import PropTypes from 'prop-types';

// Layout Routes
import UserLayout from "../components/common/layouts/designs/userLayout";
import DefaultLayout from '../components/common/layouts/designs/defaultLayout'; // Header + Footer
import UserPageNotFound from "../components/common/layouts/designs/userPageNotFound";
import MainWebsiteRoute from "./mainWebsiteRoute";
import DefaultRoute from '../components/common/layouts/routes/defaultRoutes'; // Header + Footer

const LazyUserDashboard = lazy(() => import("../components/Users/Dashboard"));
const LazyUserCart = lazy(() => import("../components/Users/UserCart"));
const LazyActiveSelling = lazy(() => import("../components/Users/ActiveSelling"));
const LazyProfile = lazy(() => import("../components/Users/Profile"));


const authorizedRoutes = [
    {
        path: '/user/dashboard',
        exact: true,
        permissions: ['customer'],
        redirect: '/pagenotfound',
        component: LazyUserDashboard,
    },
    {
        path: '/user/cart',
        exact: true,
        permissions: ['customer'],
        redirect: '/pagenotfound',
        component: LazyUserCart,
    },
    {
        path: '/user/activeselling',
        exact: true,
        permissions: ['customer'],
        redirect: '/pagenotfound',
        component: LazyActiveSelling,
    },
    {
        path: '/user/profile',
        exact: true,
        permissions: ['customer'],
        redirect: '/pagenotfound',
        component: LazyProfile,
    },
    {
        exact: true,
        permissions: ['customer'],
        component: UserPageNotFound,
        unauthorized: UserPageNotFound,
    }
];


class UserPanel extends Component {

    constructor(args) {
        super(args);
    }

    componentDidMount() {

    }

    render() {

        return (
            <AclRouter
                // sync user authorities with the user data in your application
                authorities={this.props.auth.user.usergroup}
                authorizedRoutes={authorizedRoutes}
                authorizedLayout={UserLayout}
                normalRoutes={MainWebsiteRoute}
                normalLayout={DefaultLayout}
                notFound={() => ""}
            />
        );
    }
}

UserPanel.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

const mapDispatchToProps = {}

export default (connect(mapStateToProps, mapDispatchToProps)(UserPanel));