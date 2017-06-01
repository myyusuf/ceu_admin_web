import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import CEUConstant from '../CEUConstant';

const Option = Select.Option;
const FormItem = Form.Item;

export default class HospitalCreateForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const hospitalTypes = [];
    CEUConstant.HOSPITAL_TYPES.forEach((hospitalType) => {
      hospitalTypes.push(
        <Option key={hospitalType.id}>{hospitalType.type}</Option>,
      );
    });

    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        title="Rumah Sakit Baru"
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
                  message: 'Kode wajib diisi',
                },
                {
                  min: 3,
                  message: 'Panjang kode minimum 3 karakter',
                },
                {
                  max: 10,
                  message: 'Panjang kode maximum 10 karakter',
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
          <FormItem label="Tipe">
            {getFieldDecorator('tipe', {
              rules: [
                {
                  required: true,
                  message: 'Tipe wajib diisi',
                },
              ],
            })(
              <Select
                mode="single"
                placeholder="Pilih tingkat"
                style={{ width: '50%' }}
              >
                {hospitalTypes}
              </Select>,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
