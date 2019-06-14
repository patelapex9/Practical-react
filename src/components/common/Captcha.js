import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {GOOGLE_CAPTCHA_KEY} from "../../redux/actions/global";
//const GOOGLE_CAPTCHA_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

class Captcha extends Component {

  constructor(props) {
    super(props);
    this._reCaptchaRef = React.createRef();
        
  }
 
  render() {    

    return (
       <div className="googlecaptcha">
          <ReCAPTCHA
            style={{ display: "inline-block",border:"red" }}
            ref={this._reCaptchaRef}
            sitekey={GOOGLE_CAPTCHA_KEY}
            onChange = {this.props.captchHandler}
            size="normal"
          />
       </div>
    );
  }
}

export default Captcha;
