import React, { Component } from "react";
import { Row, Col, PageHeader } from "antd";
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import {withRouter} from 'react-router-dom';
// import Iframe from 'react-iframe';


class FilePreview extends Component {

    constructor(args) {
        super(args);
        this.state = {
        };
    }
    componentDidMount() {
    }


    render() {
        const { list } = this.props;
        const PUBLIC_URL =  'http://127.0.0.1:8000/'; //api url
        if (list === null || list == undefined) {
            return (<div> <Spinner /> </div>)
        } else {
            console.log("here single",list)
            let fileurl  = PUBLIC_URL + list.document;
            console.log("fileurl",fileurl)
            return (
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <PageHeader  title={list.name} subTitle={list.name} backIcon={false} style={{backgroundColor:'blue'}}/>,
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    {/* <iframe url={fileurl}
                            width="100%"
                            height="800px"
                            display="initial"
                            frameBorder = "0"
                            scrolling   = "hidden"
                            styles={{overflow: "hidden"}} /> */}
                            <iframe src={fileurl} width="100%" height="500" styles={{overflow: "hidden"}}></iframe>
                    </Col>
                </Row>
            )
        }
    }
}

FilePreview.propTypes = {
    //getDocumentsById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        list: state.app.single,
    }
}

const mapDispatchToProps = {
   
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilePreview));