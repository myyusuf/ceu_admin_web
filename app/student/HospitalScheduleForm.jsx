import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import axios from 'axios';
import Col from 'antd/lib/col';
import DatePicker from 'antd/lib/date-picker';

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
    // this.props.form.setFieldsValue({
    //   bagian: 'valuePropName',
    // });
  }

  handlePick() {
    // this.props.form.setFieldsValue({
    //   bagian: 'value',
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const hospitalPlanRangeDate1 = fieldsValue.hospitalPlanRangeDate1;
        const values = {
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
               Rumah Sakit&nbsp;
               <Tooltip title="Isi rumah sakit dengan memilih.">
                 <Icon type="question-circle-o" />
               </Tooltip>
             </span>
           )}
          hasFeedback
        >
             {getFieldDecorator('rumahSakit', {})(
              <div>
                <Col span={18}><Input /></Col>
                <Col span={6}>
                  <Button
                    type="dashed"
                    size="large"
                    onClick={this.handlePick} style={{ marginLeft: 10 }}
                  >
                  Pilih
                 </Button>
                </Col>
              </div>,
           )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Rencana RS 1
            </span>
           )}
        >
          {getFieldDecorator('hospitalPlanRangeDate1', {})(
            <RangePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Mulai RS 1
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealStartDate1', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Selesai RS 1
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealEndDate1', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Rencana RS 2
            </span>
           )}
        >
          {getFieldDecorator('hospitalPlanRangeDate2', {})(
            <RangePicker onChange={onChange} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Mulai RS 2
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealStartDate2', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Selesai RS 2
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealEndDate2', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
               Klinik&nbsp;
               <Tooltip title="Isi klinik dengan memilih.">
                 <Icon type="question-circle-o" />
               </Tooltip>
            </span>
           )}
          hasFeedback
        >
          {getFieldDecorator('klinik', {})(
            <div>
              <Col span={18}><Input /></Col>
              <Col span={6}>
                <Button
                  type="dashed"
                  size="large"
                  onClick={this.handlePick} style={{ marginLeft: 10 }}
                >
                  Pilih
                </Button>
              </Col>
            </div>,
           )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Rencana Klinik
            </span>
           )}
        >
          {getFieldDecorator('klinikPlanRangeDate', {})(
            <RangePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Mulai Klinik
            </span>
           )}
        >
          {getFieldDecorator('clinicRealStartDate', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Selesai Klinik
            </span>
           )}
        >
          {getFieldDecorator('clinicRealEndDate', {})(
            <DatePicker onChange={onChange} />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Save</Button>
        </FormItem>
      </Form>
    );
  }
}
