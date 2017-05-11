
import React from 'react';
import Select from 'antd/lib/select';
import CEUConstant from '../../CEUConstant';

const Option = Select.Option;

const StudentStatusSelect = ({ values, onChange }) => {
  const statusArray = [];

  CEUConstant.STUDENT_STATUS_ARRAY.forEach((studentStatus) => {
    statusArray.push(<Option key={studentStatus.id}>{studentStatus.name}</Option>);
  });

  return (
    <Select
      mode="multiple"
      style={{ minWidth: 100 }}
      placeholder="Status"
      defaultValue={values}
      onChange={(selectedValue) => { onChange(selectedValue); }}
    >
      {statusArray}
    </Select>
  );
};

StudentStatusSelect.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func,
};

StudentStatusSelect.defaultProps = {
  values: ['1'],
  onChange: (selectedValue) => { console.log(selectedValue); },
};

export default StudentStatusSelect;
