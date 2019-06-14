import React, { Component } from "react";

// Main Router
import Router from "../router/router"

// Import Styling
import "antd/dist/antd.css";

// Import Context
import { AppProvider } from '../utils/context/appContext';


// import { withNamespaces } from 'react-i18next';

class App extends Component {
  render() {
    return (
     <AppProvider>
       <Router />
     </AppProvider>
    );
  }
}

export default App;