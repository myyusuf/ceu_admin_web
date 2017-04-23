
import React from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

const StudentCard = ({ student, onDetailsClick }) => {
  return (
    <Card className="student-card">
      <Row>
        <Col span={24}><img src="assets/images/avatar.png" alt="Avatar" /></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Nam</span></Col>
        <Col span={12}><span>{student.nama}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Stambuk Lama</span></Col>
        <Col span={12}><span>{student.stambuk_lama}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Stambuk Baru</span></Col>
        <Col span={12}><span>{student.stambuk_baru}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Tingkat</span></Col>
        <Col span={12}><span>{student.tingkat}</span></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Status</span></Col>
        <Col span={12}><Tag color="#2db7f5">{student.status}</Tag></Col>
      </Row>
      <Row>
        <Col span={12} />
        <Col span={12}>
          <Button type="dashed" onClick={() => { onDetailsClick(student); }}>
            Details
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

StudentCard.propTypes = {
  student: React.PropTypes.any.isRequired,
  onDetailsClick: React.PropTypes.func,
};

export default StudentCard;
