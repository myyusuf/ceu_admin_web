
import React from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';

const StudentInfo = ({ student }) => {
  return (
    <div className="student-info">
      Info {student.nama}
    </div>
  );
};

export default StudentInfo;
