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
import moment from 'moment';

const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class StudentMainInfoForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { student, form } = this.props;
    const { getFieldDecorator } = form;
    let tanggalLahir = null;
    if (student.tanggal_lahir) {
      tanggalLahir = moment(new Date(student.tanggal_lahir))
    }
    return (
      <Form layout="vertical" style={{ paddingLeft: 25, width: '50%' }}>
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Stambuk Lama">
              {getFieldDecorator('stambuk_lama', {
                initialValue: student.stambuk_lama,
                rules: [
                  {
                    required: true,
                    message: 'Stambuk lama wajib diisi',
                  },
                  {
                    min: 3,
                    message: 'Panjang stambuk lama minimum 3 karakter',
                  },
                  {
                    max: 10,
                    message: 'Panjang stambuk lama bagian maximum 10 karakter',
                  },
                ],
              })(
                <Input maxLength="10" />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Stambuk Baru">
              {getFieldDecorator('stambuk_baru', {
                initialValue: student.stambuk_baru,
                rules: [
                  {
                    required: true,
                    message: 'Stambuk baru bagian wajib diisi',
                  },
                  {
                    min: 3,
                    message: 'Panjang stambuk baru minimum 3 karakter',
                  },
                  {
                    max: 30,
                    message: 'Panjang stambuk baru maximum 30 karakter',
                  },
                ],
              })(
                <Input maxLength="30" />,
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Nama">
          {getFieldDecorator('nama', {
            initialValue: student.nama,
            rules: [
              {
                required: true,
                message: 'Nama wajib diisi',
              },
              {
                min: 3,
                message: 'Panjang nama minimum 3 karakter',
              },
              {
                max: 30,
                message: 'Panjang nama maximum 30 karakter',
              },
            ],
          })(
            <Input maxLength="30" />,
          )}
        </FormItem>
        <FormItem label="Tingkat">
          {getFieldDecorator('tingkat', {
            initialValue: student.tingkat,
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
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Tempat Lahir">
              {getFieldDecorator('tempat_lahir', {
                initialValue: student.tempat_lahir,
                rules: [],
              })(
                <Input maxLength="10" />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Tanggal Lahir">
              {getFieldDecorator('tanggal_lahir', {
                initialValue: tanggalLahir,
                rules: [],
              })(
                <DatePicker />,
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Jenis Kelamin">
          {getFieldDecorator('gender', {
            initialValue: student.gender,
            rules: [
              {
                required: true,
                message: 'Jenis kelamin wajib diisi',
              },
            ],
          })(
            <RadioGroup>
              <Radio value={'M'}>Laki-laki</Radio>
              <Radio value={'F'}>Perempuan</Radio>
            </RadioGroup>,
          )}
        </FormItem>
      </Form>
    );
  }
}
