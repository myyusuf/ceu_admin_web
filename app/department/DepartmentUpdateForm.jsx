import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import { SliderPicker } from 'react-color';

const Option = Select.Option;
const FormItem = Form.Item;

export default class DepartmentUpdateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      departmentColor: '',
    };

    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(color) {
    this.props.form.setFieldsValue({
      warna: color.hex.toUpperCase(),
    });
  }

  render() {
    const { visible, onClose, onUpdate, department, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        title="Edit Bagian"
        okText="Update"
        cancelText="Close"
        onCancel={onClose}
        onOk={onUpdate}
      >
        <Form layout="vertical">
          <FormItem label="Kode">
            {getFieldDecorator('kode', {
              initialValue: department.kode,
              rules: [
                {
                  required: true,
                  message: 'Kode bagian wajib diisi',
                },
                {
                  min: 3,
                  message: 'Panjang kode bagian minimum 3 karakter',
                },
                {
                  max: 10,
                  message: 'Panjang kode bagian maximum 10 karakter',
                },
              ],
            })(
              <Input maxLength="10" disabled />,
            )}
          </FormItem>
          <FormItem label="Nama">
            {getFieldDecorator('nama', {
              initialValue: department.nama,
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
          <FormItem label="Tingkat">
            {getFieldDecorator('tingkat', {
              initialValue: String(department.tingkat),
              rules: [
                {
                  required: true,
                  message: 'Tingkat wajib diisi',
                },
              ],
            })(
              <Select
                mode="single"
                placeholder="Pilih tingkat"
              >
                <Option key="1">Tingkat 1</Option>
                <Option key="2">Tingkat 2</Option>
              </Select>,
            )}
          </FormItem>
          <FormItem label="Durasi Dalam Minggu">
            {getFieldDecorator('durasi_minggu', {
              initialValue: department.durasi_minggu,
              rules: [],
            })(
              <InputNumber min={4} max={10} />,
            )}
          </FormItem>
          <Row gutter={15}>
            <Col span={12}>
              <FormItem label="Keterangan">
                {getFieldDecorator('keterangan', {
                  initialValue: department.keterangan,
                  rules: [],
                })(
                  <Input type="textarea" style={{ height: 70 }} />,
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Warna">
                {getFieldDecorator('warna', {
                  initialValue: department.warna || '#FFF',
                  rules: [],
                })(
                  <Input
                    maxLength="6"
                    style={{ backgroundColor: this.props.form.getFieldValue('warna') }}
                    readOnly
                  />,
                )}
              </FormItem>
              <SliderPicker
                color={this.props.form.getFieldValue('warna')}
                onChangeComplete={this.onColorChange}
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
