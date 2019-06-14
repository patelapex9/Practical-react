import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <div id="demo-content">
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
        {/* <div className="animLogo fade-in one" style={{ position: 'absolute', top: '46%', left: '0', right: '0', textAlign:'center', opacity: '0',   zIndex: '1200'}} ><img src="../../assets/images/logo-loader.png" width="80" height="80" alt=""/></div> */}
      </div>

    </div>
  );
};
