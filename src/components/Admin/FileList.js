import React, { Component } from "react";
import { Row, Col, Icon, Button, Form, Upload, List, Divider } from "antd";
import { connect } from 'react-redux';
import Spinner from '../../components/common/Spinner';
import { getDocumentSelected, getDocuments } from '../../redux/actions/appActions'
import { withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const listClassSelected = {
    margin: '20px',
    padding: '20px',
    borderLeft: '5px solid blue',
    background: 'white'
}

const listClass = {
    margin: '20px',
    padding: '20px',
    background: 'white'
}
class FileList extends Component {

    constructor(args) {
        super(args);
        this.state = {
            selectedDocumentKey: 0
        };
    }

    componentDidMount() {
        this.props.getDocuments();
    }

   

    showDocument(item,key) {
        console.log("item", item)
        this.setState({selectedDocumentKey : key})
        this.props.getDocumentSelected(item);
    }


    render() {
         const { list } = this.props;
         console.log('list',list);
        if (list === null || list == undefined) {
            return (<div> <Spinner /> </div>)
        } else {
            return (
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Row gutter={16}>
                            <List
                                size="large"
                                dataSource={list}
                                renderItem={(item,key) => <List.Item onClick={() => this.showDocument(item,key)}
                                    style={(this.state.selectedDocumentKey == key) ?  listClassSelected : listClass}
                                    >
                                    {item.name}
                                </List.Item>}
                            />
                        </Row>
                    </Col>
                </Row>
            )
        }
    }
}

FileList.propTypes = {
    getDocuments: PropTypes.func.isRequired,
    getDocumentSelected : PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        list: state.app.list,

    }
}

const mapDispatchToProps = {
    getDocuments,
    getDocumentSelected
};


export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(FileList)));