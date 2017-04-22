
import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
const { Header, Footer, Sider, Content } = Layout;

import LoginInfo from './user/LoginInfo';
import SideMenu from './SideMenu';
import WorkspaceTitle from './WorkspaceTitle';
import Dashboard from './dashboard/Dashboard';

const Workspace = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <img src="assets/images/small_logo.png" />
          <span>CEU</span>
        </div>
      </Header>
      <Layout className="content">
        <Sider width={250}>
          <LoginInfo name="Yusuf" roleName="Administrator" />
          <SideMenu />
        </Sider>
        <Content>
          <WorkspaceTitle />
          <Dashboard />
        </Content>
      </Layout>
      
    </Layout>
  );
}

export default Workspace;
