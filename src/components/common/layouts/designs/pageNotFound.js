import React, { Component } from "react";
import { Row, Col, Icon, Button, Typography, Modal, Carousel  } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faGift, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
const { Paragraph } = Typography;
class PageNotFound extends Component {
  constructor(args) {
    super(args);
    this.state = {  
      first: false,
      second: false,
      third: false,
      fourth: false,      
      fifth: false,      
      confirmLoading: false
    }
  }
  render() {    
    return (
      <div>
        <div className="tf property__detail">
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
      </div>
    );
  }
}

export default PageNotFound;

