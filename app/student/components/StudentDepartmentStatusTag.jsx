
import React from 'react';
import Tag from 'antd/lib/tag';
import CEUConstant from '../../CEUConstant';

const StudentDepartmentStatusTag = ({ value }) => {
  const statusArray = [];

  CEUConstant.STUDENT_DEPARTMENT_STATUS_ARRAY.forEach((studentStatus) => {
    statusArray.push(<Tag color={studentStatus.colorCode}>{studentStatus.name}</Tag>);
  });

  return (
    statusArray[value - 1]
  );
};

StudentDepartmentStatusTag.propTypes = {
  value: React.PropTypes.number,
};

StudentDepartmentStatusTag.defaultProps = {
  value: 1,
};

export default StudentDepartmentStatusTag;
