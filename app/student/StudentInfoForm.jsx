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
import Tabs from 'antd/lib/tabs';

import StudentMainInfoForm from './student/StudentMainInfoForm';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

const WrappedStudentMainInfoForm = Form.create()(StudentMainInfoForm);

export default class StudentInfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveStudentInfoMainFormRef = this.saveStudentInfoMainFormRef.bind(this);
  }

  componentDidMount() {
    // this.props.form.setFieldsValue({
    //   bagian: this.props.takenDepartment.nama,
    //   judul: this.props.takenDepartment.judul,
    // });
  }

  saveStudentInfoMainFormRef(form) {
    this.studentInfoMainForm = form;
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
    return (

        <Tabs defaultActiveKey="1">
          <TabPane tab="Main" key="1">
            <WrappedStudentMainInfoForm ref={this.saveStudentInfoMainFormRef} />
          </TabPane>
          <TabPane tab="Kontak" key="2">

          </TabPane>
        </Tabs>

    );
  }
}
