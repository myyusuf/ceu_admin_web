
import React from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import StudentStatusTag from './components/StudentStatusTag';
import StudentDepartmentStatusTag from './components/StudentDepartmentStatusTag';

const StudentCard = ({ student, onDetailsClick }) => {
  return (
    <Card className="student-card">
      <Row>
        <Col span={18}><img className="avatar" src="assets/images/avatar.png" alt="Avatar" /></Col>
        <Col span={6}>
          <Button type="dashed" onClick={() => { onDetailsClick(student); }}>
            Details
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span className="card-name">{student.nama}</span>
          <span className="card-stambuk">
            {student.stambuk_lama} - {student.stambuk_baru}
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Tingkat</span></Col>
        <Col span={12}><Tag color="#A3A3A3">{student.tingkat}</Tag></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Status</span></Col>
        <Col span={12}><StudentStatusTag value={student.status} /></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Bagian</span></Col>
        <Col span={12}><Tag color="#2db7f5">Interna</Tag></Col>
      </Row>
      <Row>
        <Col span={12}><span className="field-caption">Status Bagian</span></Col>
        <Col span={12}><StudentDepartmentStatusTag value={student.status_bagian} /></Col>
      </Row>
      <Row>
        <Col span={24}><div className="row-delimiter" /></Col>
      </Row>
      <Row>
        <Col span={24} style={{ paddingTop: 15 }}>
          <Progress percent={student.progres_keseluruhan} />
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
