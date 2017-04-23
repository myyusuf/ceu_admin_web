import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Button from 'antd/lib/button';
import axios from 'axios';

const FormItem = Form.Item;

export default class DivisionScoreForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.form.setFieldsValue({
    //   bagian: 'value',
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
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
               Pre-Test
             </span>
           )}
        >
           {getFieldDecorator('preTest', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Tugas Ilmiah
             </span>
           )}
        >
           {getFieldDecorator('tugasIlmiah', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Diskusi Mingguan
             </span>
           )}
        >
           {getFieldDecorator('diskusiMingguan', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Nilai Ujian
             </span>
           )}
        >
           {getFieldDecorator('nilaiUjian', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Post-Test
             </span>
           )}
        >
           {getFieldDecorator('postTest', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Nilai Akhir
             </span>
           )}
        >
           {getFieldDecorator('nilaiAkhir', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Seminar
             </span>
           )}
        >
           {getFieldDecorator('seminar', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem
         {...formItemLayout}
           label={(
             <span>
               Portofolio
             </span>
           )}
        >
           {getFieldDecorator('portofolio', {})(
             <InputNumber step={0.1} />
           )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Save</Button>
        </FormItem>
      </Form>
    );
  }
}
