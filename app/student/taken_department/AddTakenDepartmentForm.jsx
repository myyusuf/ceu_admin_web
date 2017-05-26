import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const Option = Select.Option;
const FormItem = Form.Item;

export default class AddTakenDepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(color) {
    this.props.form.setFieldsValue({
      warna: color.hex.toUpperCase(),
    });
  }

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        width={450}
        title="Bagian Baru"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Row gutter={15}>
            <Col span={8}>
              <FormItem label="Tingkat">
                {getFieldDecorator('tingkat', {
                  rules: [
                    {
                      required: true,
                      message: 'Tingkat wajib diisi',
                    },
                  ],
                })(
                  <Select
                    mode="single"
                    placeholder="Pilih bagian"
                    style={{ width: '100%' }}
                  >
                    <Option key="1">Tingkat 1</Option>
                    <Option key="2">Tingkat 2</Option>
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col span={16}>
              <FormItem label="Nama">
                {getFieldDecorator('nama', {
                  rules: [
                    {
                      required: true,
                      message: 'Nama bagian wajib diisi',
                    },
                    {
                      min: 3,
                      message: 'Panjang nama bagian minimum 3 karakter',
                    },
                    {
                      max: 30,
                      message: 'Panjang nama bagian maximum 30 karakter',
                    },
                  ],
                })(
                  <Input maxLength="30" />,
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
