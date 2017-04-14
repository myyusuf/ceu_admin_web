
import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const StudentCard = ({name, newStambuk, oldStambuk, level, status}) => {
  return (
    <Card className="student-card" style={{ width: 300 }}>
      <Row>
        <Col span={24}><img src="assets/images/avatar.png"/></Col>
      </Row>
      <Row>
        <Col span={12}><label>Name</label></Col>
        <Col span={12}><label>{name}</label></Col>
      </Row>
      <Row>
        <Col span={12}><label>Stambuk Lama</label></Col>
        <Col span={12}><label>{oldStambuk}</label></Col>
      </Row>
      <Row>
        <Col span={12}><label>Stambuk Baru</label></Col>
        <Col span={12}><label>{newStambuk}</label></Col>
      </Row>
      <Row>
        <Col span={12}><label>Tingkat</label></Col>
        <Col span={12}><label>{level}</label></Col>
      </Row>
      <Row>
        <Col span={12}><label>Status</label></Col>
        <Col span={12}><Tag color="#2db7f5">{status}</Tag></Col>
      </Row>
    </Card>
  );
}

export default StudentCard;
