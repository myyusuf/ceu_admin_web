
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import LoginInfo from '../user/LoginInfo';

const Workspace = ({ children }) => {
  return (
    <div>
      <Header pageTitle="Dashboard" />
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
