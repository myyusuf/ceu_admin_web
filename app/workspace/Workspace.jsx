
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
