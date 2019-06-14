import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

// Import Internal Modules
import Spinner from "../components/common/Spinner";

// Layout Routes
import UserRoutes from '../components/common/layouts/routes/userRoutes'; // Full Page Components
//import DefaultRoute from '../components/common/layouts/routes/defaultRoutes'; // Header + Footer

// Main Website Imports
const LazyDashboard = lazy(() => import("../components/Admin/Dashboard"));
//const LazyPage404 = lazy(() => import("../components/Fractional/Page404"));


class MainWebsite extends Component {
    constructor(args) {
        super(args);
        this.state = {}
    }


    componentDidMount() {
    }

    render() {
        return (
            <Switch>
                <UserRoutes
                    exact
                    path="/"
                    render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                            <LazyDashboard {...matchprops} />
                        </Suspense>
                    )}
                />
               {/*  <DefaultRoute
                    render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                            <LazyPage404 {...matchprops} />
                        </Suspense>
                    )}
                /> */}
            </Switch>


        );
    }

}

//export default MainWebsite;
const mapStateToProps = state => ({});

// export default Router;
export default withRouter(connect(mapStateToProps, {})(MainWebsite))