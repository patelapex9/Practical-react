import React, { Component } from "react";
import { Row, Col, Icon, Button, Typography, Layout  } from "antd";
import { Link} from "react-router-dom";
const { Paragraph } = Typography;
const { Content } = Layout;
class UserPageNotFound extends Component {

    render() {
       
            return (
                <Content>
                    <div className="">
                        <div className="errorpage">
                            <Row justify="center" type="flex">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <div className="error-text text--center">
                                        <h1>4 <img src="/assets/images/404-dot.png"/> 4 </h1>
                                        <h2>Page not found</h2>
                                        <Paragraph>Looks like something went wrong<span>We're working on it</span></Paragraph>
                                        <div className="button-links">
                                            <Link to="/" className="links-btn">Go to home page</Link>
                                            <Link to="/" className="links-btn">Back</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
            );
    }
}

export default UserPageNotFound