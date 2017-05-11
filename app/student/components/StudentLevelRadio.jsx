
import React from 'react';
import Radio from 'antd/lib/radio';
import CEUConstant from '../../CEUConstant';

const StudentLevelRadio = ({ value, onChange }) => {
  const levelArray = [];

  CEUConstant.STUDENT_LEVEL_ARRAY.forEach((studentLevel) => {
    levelArray.push(
      <Radio.Button
        key={studentLevel}
        value={studentLevel}
      >
        {studentLevel}
      </Radio.Button>,
    );
  });

  return (
    <Radio.Group value={value} onChange={(selectedValue) => { onChange(selectedValue); }}>
      {levelArray}
    </Radio.Group>
  );
};

StudentLevelRadio.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

StudentLevelRadio.defaultProps = {
  value: '1',
  onChange: (selectedValue) => { console.log(selectedValue); },
};

export default StudentLevelRadio;
