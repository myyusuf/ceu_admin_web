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
const INITIAL_COLOR = '#A3A3A3';

export default class DepartmentCreateForm extends Component {

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
        title="Bagian Baru"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Kode">
            {getFieldDecorator('kode', {
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
              <Input maxLength="10" />,
            )}
          </FormItem>
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
                placeholder="Pilih tingkat"
                style={{ width: '50%' }}
              >
                <Option key="1">Tingkat 1</Option>
                <Option key="2">Tingkat 2</Option>
              </Select>,
            )}
          </FormItem>
          <Row gutter={0}>
            <Col span={6}>
              <FormItem label="Durasi (Minggu)">
                {getFieldDecorator('durasi_minggu', {
                  initialValue: 1,
                  rules: [],
                })(
                  <InputNumber min={1} max={10} />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Durasi RS1">
                {getFieldDecorator('durasi_minggu_rs1', {
                  initialValue: 1,
                  rules: [],
                })(
                  <InputNumber min={1} max={10} />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Durasi RS2">
                {getFieldDecorator('durasi_minggu_rs2', {
                  initialValue: 1,
                  rules: [],
                })(
                  <InputNumber min={1} max={10} />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Durasi Puskesmas">
                {getFieldDecorator('durasi_minggu_klinik', {
                  initialValue: 1,
                  rules: [],
                })(
                  <InputNumber min={1} max={10} />,
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col span={12}>
              <FormItem label="Keterangan">
                {getFieldDecorator('keterangan', {
                  rules: [],
                })(
                  <Input type="textarea" style={{ height: 70 }} />,
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Warna">
                {getFieldDecorator('warna', {
                  initialValue: '#FFFFFF',
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
