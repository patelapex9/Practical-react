import React, { Component } from "react";
import { Row, Col, Form, Divider } from "antd";
import { connect } from 'react-redux';
import Spinner from '../../components/common/Spinner';
import { uploadDocument } from '../../redux/actions/appActions'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class FileUpload extends Component {

    constructor(args) {
        super(args);
        this.state = {
            imageUrl: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.files[0]) {
            e.preventDefault();
            const data = new FormData();
            data.append('file', this.uploadInput.files[0]);
            data.append('filename', this.uploadInput.files[0].name);
            this.props.uploadDocument(data)
        }
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form style={{ margin: '10px' }} >
                        <Form.Item >
                            {getFieldDecorator('upload', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <input className="form-control" ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.onChange} />

                            )}
                        </Form.Item>
                    </Form>
                </Col>
                <Divider />
            </Row>
        )

    }
}

FileUpload.propTypes = {
    uploadDocument: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    uploadDocument
};

const FileForm = Form.create({ name: 'file' })(FileUpload);
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(FileForm)));