import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Radio from 'antd/lib/radio';
import DatePicker from 'antd/lib/date-picker';

const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class StudentEducationForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical" style={{ paddingLeft: 25, width: '50%' }}>
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Tahun Masuk">
              {getFieldDecorator('tahun_masuk', {
                rules: [],
              })(
                <InputNumber min={1980} max={2000} style={{ width: '100%' }} />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Tahun Lulus">
              {getFieldDecorator('tahun lulus', {
                rules: [],
              })(
                <InputNumber min={2000} max={2070} style={{ width: '100%' }} />,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Nomer Ijazah">
              {getFieldDecorator('nomer_ijazah', {
                rules: [],
              })(
                <Input maxLength="10" />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="IPK">
              {getFieldDecorator('ipk', {
                rules: [],
              })(
                <InputNumber step={0.1} min={0} />,
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
