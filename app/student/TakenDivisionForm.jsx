import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import axios from 'axios';
import Col from 'antd/lib/col';

const FormItem = Form.Item;

export default class TakenDivisionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePick = this.handlePick.bind(this);
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
           value="ss"
         hasFeedback>
           {getFieldDecorator('nama', {
             rules: [{ required: true, message: 'Isi dengan nama lengkap!', whitespace: true }],
           })(
             <Input />
           )}
         </FormItem>

         <FormItem
          {...formItemLayout}
            label={(
              <span>
                Stambuk Lama&nbsp;
                <Tooltip title="Stambuk lama mahasiswa">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          hasFeedback>
            {getFieldDecorator('stambukLama', {
              rules: [{ required: true, message: 'Isi dengan nama stambuk lama!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
           {...formItemLayout}
             label={(
               <span>
                 Stambuk Baru&nbsp;
                 <Tooltip title="Stambuk baru mahasiswa">
                   <Icon type="question-circle-o" />
                 </Tooltip>
               </span>
             )}
           hasFeedback>
             {getFieldDecorator('stambukBaru', {
               rules: [{ required: true, message: 'Isi dengan nama stambuk baru!', whitespace: true }],
             })(
               <div>
                 <Col span={18}><Input /></Col>
                 <Col span={6}><Button type="dashed" size="large" onClick={this.handlePick} style={{ marginLeft: 10 }}>Select</Button></Col>
                 </div>,
             )}
           </FormItem>

         <FormItem {...tailFormItemLayout}>
           <Button type="primary" htmlType="submit" size="large">Save</Button>
         </FormItem>
      </Form>
    );
  }
}
