import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';

const Option = Select.Option;
const FormItem = Form.Item;

const DepartmentUpdateForm = Form.create()(
  (props) => {
    const { visible, onClose, onUpdate, department, form } = props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
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
        </Form>
      </Modal>
    );
  },
);

export default DepartmentUpdateForm;
