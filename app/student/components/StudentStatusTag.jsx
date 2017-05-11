
import React from 'react';
import Tag from 'antd/lib/tag';
import CEUConstant from '../../CEUConstant';

const StudentStatusTag = ({ value }) => {
  const statusArray = [];

  CEUConstant.STUDENT_STATUS_ARRAY.forEach((studentStatus) => {
    statusArray.push(<Tag color={studentStatus.colorCode}>{studentStatus.name}</Tag>);
  });

  return (
    statusArray[value - 1]
  );
};

StudentStatusTag.propTypes = {
  value: React.PropTypes.number,
};

StudentStatusTag.defaultProps = {
  value: 1,
};

export default StudentStatusTag;
