import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Spinner from "./components/common/Spinner";

// import App from "./components/App";
const LazyApp = lazy(() => import("./components/App"));

ReactDOM.render(

    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <div className="tf">
                <LazyApp />
            </div>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);

