import React, { Component } from "react";
import { Row, Col} from "antd";
import { connect } from 'react-redux';
import FileUpload from '../../components/Admin/FileUpload';
import FileList from './FileList';
import FilePreview from './FilePreview';





class Dashboard extends Component {
   
    constructor(args) {
        super(args);
        this.state = {         
        };        
    }
    componentDidMount() {                 
    }

   
    render() {        
       const state = this.state;
       return(
           <Row>
               <Col  xs={8} sm={4} md={4} lg={4} xl={4}>
                   <FileUpload />
                   <FileList />
               </Col>

               <Col  xs={16} sm={20} md={20} lg={20} xl={20}>
                    <FilePreview />
               </Col>
           </Row>
       )
     
  }
}

Dashboard.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);