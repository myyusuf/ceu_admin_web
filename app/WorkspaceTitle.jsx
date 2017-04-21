
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';

const WorkspaceTitle = () => {
  return (
    <div className="workspace-title">
      <Row>
        <Col span={24}>
          <span className="title">Dashboard</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Breadcrumb separator=">" >
            <Breadcrumb.Item>
              Application
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
}

export default WorkspaceTitle;
