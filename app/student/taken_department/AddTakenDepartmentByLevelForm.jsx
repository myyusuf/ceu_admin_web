import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';

const Option = Select.Option;
const FormItem = Form.Item;

export default class AddTakenDepartmentByLevelForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
  }

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    const tanggalMulai = moment(new Date());

    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        width={460}
        title="Tambah Bagian Berdasarkan TIngkat"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Row gutter={15}>
            <Col span={7}>
              <FormItem label="Tingkat">
                {getFieldDecorator('tingkat', {
                  rules: [
                    {
                      required: true,
                      message: 'Bagian wajib diisi',
                    },
                  ],
                })(
                  <Select
                    mode="single"
                    placeholder="Pilih tingkat"
                    style={{ width: '100%' }}
                  >
                    <Option key="1">Tingkat 1</Option>
                    <Option key="2">Tingkat 2</Option>
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Sufix">
                {getFieldDecorator('sufix', {
                  initialValue: 1,
                  rules: [
                    {
                      required: true,
                      message: 'Sufix wajib diisi',
                    },
                    {
                      min: 1,
                      message: 'Panjang sufix minimum 1 karakter',
                    },
                    {
                      max: 15,
                      message: 'Panjang sufix maximum 30 karakter',
                    },
                  ],
                })(
                  <Input maxLength="15" />,
                )}
              </FormItem>
            </Col>
            <Col span={9}>
              <FormItem label="Tanggal Mulai">
                {getFieldDecorator('tanggal_mulai', {
                  initialValue: tanggalMulai,
                  rules: [],
                })(
                  <DatePicker />,
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
