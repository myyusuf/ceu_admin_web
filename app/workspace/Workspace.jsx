
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import LoginInfo from '../user/LoginInfo';

const Workspace = () => {
  return (
    <div>
      <Header pageTitle="Dashboard"/>
      <div className="workspace-left-menu">
        <LoginInfo name="Yusuf" roleName="Administrator" />
        <SideMenu />
      </div>
      <div className="workspace-section">
      </div>
    </div>
  );
};

export default Workspace;
