import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Radio from 'antd/lib/radio';

const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class StudentContactForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { student, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical" style={{ paddingLeft: 20, width: '50%' }}>
        <FormItem label="Alamat">
          {getFieldDecorator('alamat', {
            initialValue: student.alamat,
            rules: [],
          })(
            <Input maxLength="100" />,
          )}
        </FormItem>
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Telepon">
              {getFieldDecorator('telepon', {
                rules: [],
              })(
                <Input maxLength="15" />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Handphone">
              {getFieldDecorator('handphone', {
                rules: [],
              })(
                <Input maxLength="15" />,
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email', message: 'The input is not valid E-mail!',
              },
            ],
          })(
            <Input maxLength="100" />,
          )}
        </FormItem>
      </Form>
    );
  }
}
