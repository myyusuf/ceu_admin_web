import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';

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
        </Form>
      </Modal>
    );
  },
);

export default DepartmentCreateForm;
