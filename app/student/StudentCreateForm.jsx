import React from 'react';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';

const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const StudentCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        title="Siswa Baru"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Row gutter={15}>
            <Col span={12}>
              <FormItem label="Stambuk Lama">
                {getFieldDecorator('stambuk_lama', {
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
          <FormItem label="Jenis Kelamin">
            {getFieldDecorator('gender', {
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
      </Modal>
    );
  },
);

export default StudentCreateForm;
