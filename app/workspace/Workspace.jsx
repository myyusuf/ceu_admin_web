
import React from 'react';
import SideMenu from './SideMenu';
import LoginInfo from '../user/LoginInfo';

const Workspace = () => {
  return (
    <div>
      <div className="workspace-header">
        <img className="logo" src="assets/images/small_logo.png" alt="Logo" />
        <span className="app-name">CEU</span>
        <nav>
          <ul>
            <li><img src="assets/images/icons/settings.png" alt="menu" /></li>
          </ul>
        </nav>
      </div>
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
