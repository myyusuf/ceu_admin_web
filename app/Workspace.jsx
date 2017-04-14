
import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
const { Header, Footer, Sider, Content } = Layout;

import SideMenu from './SideMenu';

const Workspace = () => {
  return (
    <Layout className="layout">
      <Header className="header">

      </Header>
      <Layout className="content">
        <Sider width={250}><SideMenu /></Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Workspace;
