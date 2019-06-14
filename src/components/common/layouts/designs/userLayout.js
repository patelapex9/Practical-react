// import external modules
import React, { Component } from "react";
import { Layout } from "antd";
// Import Internal Modules
import { connect } from 'react-redux';


class userLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        const { children } = this.props;

        return (
            <div>                
                <div className="dashboard-main">
                    <div className="app-layout">
                    <Layout>
                            <Layout>
                                {children}
                            </Layout>
                    </Layout>                       
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
}



export default (connect(
    mapStateToProps,
    {  }
)(userLayout));