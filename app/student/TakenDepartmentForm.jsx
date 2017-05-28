import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import moment from 'moment';

const { RangePicker } = DatePicker;

const FormItem = Form.Item;

export default class TakenDepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.form.setFieldsValue({
    //   bagian: this.props.takenDepartment.nama,
    //   judul: this.props.takenDepartment.judul,
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.form.validateFields((err, fieldsValue) => {
    //   if (!err) {
    //     const planRangeDate = fieldsValue.planRangeDate;
    //     const hospitalPlanRangeDate1 = fieldsValue.hospitalPlanRangeDate1;
    //     const values = {
    //       planRangeDate: [planRangeDate[0].format('YYYY-MM-DD'), planRangeDate[1].format('YYYY-MM-DD')],
    //       hospitalPlanRangeDate1: [hospitalPlanRangeDate1[0].format('YYYY-MM-DD'), hospitalPlanRangeDate1[1].format('YYYY-MM-DD')],
    //     };
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  render() {
    const { takenDepartment, form } = this.props;
    const { getFieldDecorator } = form;
    let planStartDate = null;
    let planEndDate = null;
    if (takenDepartment.plan_start_date) {
      planStartDate = moment(new Date(takenDepartment.plan_start_date));
    }
    if (takenDepartment.plan_end_date) {
      planEndDate = moment(new Date(takenDepartment.plan_end_date));
    }

    return (
      <Form
        layout="vertical"
        onSubmit={this.handleSubmit}
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <Row gutter={15}>
          <Col span={12}>
            <FormItem label="Bagian">
              {getFieldDecorator('bagian', {
                initialValue: takenDepartment.nama,
                rules: [],
              })(
                <Input maxLength="10" disabled />,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Judul">
              {getFieldDecorator('judul', {
                initialValue: takenDepartment.judul,
                rules: [
                  {
                    required: true,
                    message: 'Judul wajib diisi',
                  },
                  {
                    min: 3,
                    message: 'Panjang judul minimum 3 karakter',
                  },
                  {
                    max: 30,
                    message: 'Panjang judul maximum 30 karakter',
                  },
                ],
              })(
                <Input maxLength="30" />,
              )}
            </FormItem>
          </Col>
        </Row>

        <FormItem label="Tanggal Rencana">
          {getFieldDecorator('tanggal_rencana', {
            initialValue: [planStartDate, planEndDate],
            rules: [],
          })(
            <RangePicker style={{ width: '48%' }} />
          )}
        </FormItem>

        <Row gutter={15}>
          <Col span={6}>
            <FormItem label="Tanggal Mulai">
              {getFieldDecorator('tanggal_mulai', {
                initialValue: takenDepartment.tanggal_mulai,
                rules: [],
              })(
                <DatePicker />,
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Tanggal Selesai">
              {getFieldDecorator('tanggal_selesai', {
                initialValue: takenDepartment.tanggal_selesai,
                rules: [],
              })(
                <DatePicker />,
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          {getFieldDecorator('rotasi_akhir', {
            rules: [],
          })(
            <Checkbox>Rotasi Akhir</Checkbox>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('selesai', {
            rules: [],
          })(
            <Checkbox>Selesai</Checkbox>
          )}
        </FormItem>
        <Row gutter={10}>
          <Col span={3}>
            <FormItem>
              <Button type="primary" htmlType="submit" size="large">Save</Button>
            </FormItem>
          </Col>
          <Col span={3}>
            <FormItem>
              <Button
                type="danger"
                ghost
                icon="delete"
                htmlType="submit"
                size="large"
              >
                Delete
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
