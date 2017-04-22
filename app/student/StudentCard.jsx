
import React from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

const StudentCard = ({ name, newStambuk, oldStambuk, level, status, onDetailsClick }) => {
  return (
    <Card className="student-card">
      <Row>
        <Col span={24}><img src="assets/images/avatar.png" alt="Avatar" /></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Nama</span></Col>
        <Col span={12}><span>{name}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Stambuk Lama</span></Col>
        <Col span={12}><span>{oldStambuk}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Stambuk Baru</span></Col>
        <Col span={12}><span>{newStambuk}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Tingkat</span></Col>
        <Col span={12}><span>{level}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Status</span></Col>
        <Col span={12}><Tag color="#2db7f5">{status}</Tag></Col>
      </Row>
      <Row>
        <Col span={12} />
        <Col span={12}>
          <Button type="dashed" onClick={() => { onDetailsClick(name); }}>
            Details
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

StudentCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  newStambuk: React.PropTypes.string.isRequired,
  oldStambuk: React.PropTypes.string.isRequired,
  level: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  onDetailsClick: React.PropTypes.any,
};

export default StudentCard;
