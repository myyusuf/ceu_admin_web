
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import DashboardSimpleInfo from './DashboardSimpleInfo';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row gutter={20}>
        <Col span={6}><DashboardSimpleInfo /></Col>
        <Col span={6}><DashboardSimpleInfo /></Col>
        <Col span={6}><DashboardSimpleInfo /></Col>
        <Col span={6}><DashboardSimpleInfo /></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
