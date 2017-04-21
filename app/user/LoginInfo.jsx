
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const LoginInfo = ({ name, roleName }) => {
  return (
    <div className="login-info">
      <Row>
        <Col span={24}>
          <div className="login-info-image">
            <img className="img-circle" src="assets/images/avatar.png" alt="Avatar" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="login-info-title">{name}</div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="login-info-role">{roleName}</div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginInfo;
