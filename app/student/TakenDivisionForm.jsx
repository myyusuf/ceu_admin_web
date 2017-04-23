import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import axios from 'axios';
import Col from 'antd/lib/col';
import DatePicker from 'antd/lib/date-picker';

import Tabs from 'antd/lib/tabs';

const TabPane = Tabs.TabPane;

const { RangePicker } = DatePicker;

const FormItem = Form.Item;

export default class TakenDivisionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    this.props.form.setFieldsValue({
      bagian: 'value',
    });
  }

  handlePick() {
    this.props.form.setFieldsValue({
      bagian: 'value',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const planRangeDate = fieldsValue.planRangeDate;
        const hospitalPlanRangeDate1 = fieldsValue.hospitalPlanRangeDate1;
        const values = {
          planRangeDate: [planRangeDate[0].format('YYYY-MM-DD'), planRangeDate[1].format('YYYY-MM-DD')],
          hospitalPlanRangeDate1: [hospitalPlanRangeDate1[0].format('YYYY-MM-DD'), hospitalPlanRangeDate1[1].format('YYYY-MM-DD')],
        };
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

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
      <Form onSubmit={this.handleSubmit} className="login-form">

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Bagian
             </span>
           )}
        >
           {getFieldDecorator('bagian', {})(
             <Input disabled />
           )}
         </FormItem>

         <FormItem
           {...formItemLayout}
           label={(
             <span>
              Judul
             </span>
            )}
           hasFeedback
         >
           {getFieldDecorator('judul', {
             rules: [{ required: true, message: 'Judul harus diisi!', whitespace: true }],
           })(
             <Input />
           )}
         </FormItem>

         <FormItem
           {...formItemLayout}
           label={(
             <span>
              Tanggal Rencana
             </span>
            )}
         >
           {getFieldDecorator('planRangeDate', {})(
             <RangePicker onChange={onChange} />
           )}
         </FormItem>

         <FormItem
           {...formItemLayout}
           label={(
             <span>
              Tanggal Mulai
             </span>
            )}
         >
           {getFieldDecorator('realStartDate', {})(
             <DatePicker onChange={onChange} />
           )}
         </FormItem>

         <FormItem
           {...formItemLayout}
           label={(
             <span>
              Tanggal Selesai
             </span>
            )}
         >
           {getFieldDecorator('endStartDate', {})(
             <DatePicker onChange={onChange} />
           )}
         </FormItem>

         <FormItem {...tailFormItemLayout} >
            {getFieldDecorator('lastRotation', {
              valuePropName: 'checked',
            })(
              <Checkbox>Rotasi Akhir</Checkbox>
            )}
          </FormItem>
         <FormItem {...tailFormItemLayout}>
           <Button type="primary" htmlType="submit" size="large">Save</Button>
         </FormItem>
      </Form>
    );
  }
}
