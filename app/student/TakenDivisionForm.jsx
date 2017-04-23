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
      nama: 'Hi..',
    });
  }

  handlePick() {
    this.props.form.setFieldsValue({
      nama: 'Hi..',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
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
               Nama
             </span>
           )}
        >
           {getFieldDecorator('nama', {})(
             <Input />
           )}
         </FormItem>

         <FormItem
          {...formItemLayout}
            label={(
              <span>
                Bagian
              </span>
            )}
         >
            {getFieldDecorator('bagian', {})(
              <Input />
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
             Tanggal Realisasi
            </span>
           )}
        >
          {getFieldDecorator('realRangeDate', {})(
            <RangePicker onChange={onChange} />
          )}
        </FormItem>

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
         hasFeedback>
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
            <RangePicker onChange={onChange} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Realisasi RS 1
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealRangeDate1', {})(
            <RangePicker onChange={onChange} />
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
             Tanggal Realisasi RS 2
            </span>
           )}
        >
          {getFieldDecorator('hospitalRealRangeDate2', {})(
            <RangePicker onChange={onChange} />
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
         hasFeedback>
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
            <RangePicker onChange={onChange} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
             Tanggal Realisasi Klinik
            </span>
           )}
        >
          {getFieldDecorator('klinikRealRangeDate', {})(
            <RangePicker onChange={onChange} />
          )}
        </FormItem>

         <FormItem {...tailFormItemLayout}>
           <Button type="primary" htmlType="submit" size="large">Save</Button>
         </FormItem>
      </Form>
    );
  }
}
