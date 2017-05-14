import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';

const Option = Select.Option;
const FormItem = Form.Item;

const DepartmentCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
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
          <FormItem label="Durasi Dalam Minggu">
            {getFieldDecorator('durasi_minggu', {
              initialValue: 4,
              rules: [],
            })(
              <InputNumber min={4} max={10} />,
            )}
          </FormItem>
          <FormItem label="Keterangan">
            {getFieldDecorator('keterangan', {
              rules: [],
            })(
              <Input type="textarea" />,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);

export default DepartmentCreateForm;
