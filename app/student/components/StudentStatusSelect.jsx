
import React from 'react';
import Select from 'antd/lib/select';

const Option = Select.Option;

const StudentStatusSelect = ({ values, onChange }) => {
  const statusArray = [];
  statusArray.push(<Option key="1">Aktif</Option>);
  statusArray.push(<Option key="2">Bermasalah</Option>);
  statusArray.push(<Option key="3">Lulus</Option>);

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
