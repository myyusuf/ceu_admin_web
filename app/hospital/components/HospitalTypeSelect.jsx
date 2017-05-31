
import React from 'react';
import Select from 'antd/lib/select';
import CEUConstant from '../../CEUConstant';

const Option = Select.Option;

const HospitalTypeSelect = () => {
  const typeArray = [];

  CEUConstant.HOSPITAL_TYPES.forEach((hospitalType) => {
    typeArray.push(
      <Option key={hospitalType.id}>{hospitalType.type}</Option>,
    );
  });

  return (
    <Select style={{ width: '40%' }}>
      {typeArray}
    </Select>
  );
};

export default HospitalTypeSelect;
