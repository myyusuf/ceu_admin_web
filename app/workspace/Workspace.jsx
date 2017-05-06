
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import LoginInfo from '../user/LoginInfo';

const Workspace = ({ children }) => {

  const location = window.location.href;
  let pageTitle = '';

  if (location.indexOf('dashboard') > 0) {
    pageTitle = 'Dashboard';
  } else if (location.indexOf('student') > 0) {
    pageTitle = 'Student';
  } else if (location.indexOf('hospital') > 0) {
    pageTitle = 'Hospital';
  } else if (location.indexOf('pretest') > 0) {
    pageTitle = 'Pre-Test';
  } else if (location.indexOf('posttest') > 0) {
    pageTitle = 'Post-Test';
  }  else if (location.indexOf('mppd') > 0) {
    pageTitle = 'MPPD';
  }
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="workspace-left-menu">
        <LoginInfo name="Yusuf" roleName="Administrator" />
        <SideMenu />
      </div>
      <div className="workspace-section">
        {children}
      </div>
    </div>
  );
};

export default Workspace;
