import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';
import Radio from 'antd/lib/radio';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class StudentInfoForm extends Component {

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

    const student = this.props.student;

    const formItemLayoutHorizontal = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const formItemLayout2 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 0 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
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
      <Form onSubmit={this.handleSubmit} className="student-info-form" layout="vertical">
        <Row gutter={20}>
          <Col span={12}>
            <FormItem
              {...formItemLayoutHorizontal}
              required
              label={(
                <span>
                  Stambuk Lama
                </span>
               )}
            >
              <Input value={student.stambuk_lama} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayoutHorizontal}
              required
              label={(
                <span>
                  Stambuk Baru
                </span>
               )}
            >
              <Input value={student.stambuk_baru} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FormItem
              {...formItemLayout}
              required
              label={(
                <span>
                  Nama
                </span>
               )}
            >
              <Input value={student.nama} />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <FormItem
              {...formItemLayoutHorizontal}
              label={(
                <span>
                  Tempat Tanggal Lahir
                </span>
               )}
            >
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout2}
            >
              <DatePicker onChange={onChange} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FormItem
              {...formItemLayout}
              required
              label={(
                <span>
                  Jenis Kelamin
                </span>
               )}
            >
              <RadioGroup onChange={this.onChange} >
                <Radio value={'M'}>Laki-laki</Radio>
                <Radio value={'F'}>Perempuan</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">Save</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
