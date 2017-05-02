import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';

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
    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="taken-department-form">
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Bagian
            </span>
           )}
        >
          <Input disabled value={this.props.takenDepartment.nama} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Judul
            </span>
           )}
        >
          <Input value={this.props.takenDepartment.judul} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Tanggal Rencana
            </span>
           )}
        >
          <RangePicker onChange={onChange} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Tanggal Mulai
            </span>
           )}
        >
          <DatePicker onChange={onChange} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          style={{ marginBottom: 8 }}
          label={(
            <span>
              Tanggal Selesai
            </span>
           )}
        >
          <DatePicker onChange={onChange} />
        </FormItem>

        <FormItem {...tailFormItemLayout} style={{ marginBottom: 5 }}>
          <Checkbox>Rotasi Akhir</Checkbox>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          <Checkbox>Selesai</Checkbox>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Save</Button>
        </FormItem>
      </Form>
    );
  }
}
