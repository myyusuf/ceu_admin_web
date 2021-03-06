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
import Message from 'antd/lib/message';
import flow from 'nimble';

import StudentMainInfoForm from './student/StudentMainInfoForm';
import StudentEducationForm from './student/StudentEducationForm';
import StudentContactForm from './student/StudentContactForm';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

const WrappedStudentMainInfoForm = Form.create()(StudentMainInfoForm);
const WrappedStudentEducationForm = Form.create()(StudentEducationForm);
const WrappedStudentContactForm = Form.create()(StudentContactForm);

export default class StudentInfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: props.student,
    };

    this.saveStudentInfoMainFormRef = this.saveStudentInfoMainFormRef.bind(this);
    this.saveStudentEducationFormRef = this.saveStudentEducationFormRef.bind(this);
    this.saveStudentContactFormRef = this.saveStudentContactFormRef.bind(this);
    this.handleUpdateStudentInfo = this.handleUpdateStudentInfo.bind(this);
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

  saveStudentEducationFormRef(form) {
    this.studentEducationForm = form;
  }

  saveStudentContactFormRef(form) {
    this.studentContactForm = form;
  }

  handleUpdateStudentInfo() {
    const infoForm = this.studentInfoMainForm;
    const educationForm = this.studentEducationForm;
    const contactForm = this.studentContactForm;

    const series = [];
    const validatedValue = {};

    const validateInfoForm = (callback) => {
      infoForm.validateFields((err, values) => {
        if (err) {
          callback(err);
        }
        validatedValue.infoForm = values;
        callback();
      });
    };

    const validateEducationForm = (callback) => {
      if (educationForm === undefined) {
        callback();
        return;
      }
      educationForm.validateFields((err, values) => {
        if (err) {
          callback(err);
        }
        validatedValue.educationForm = values;
        callback();
      });
    };

    const validateContactForm = (callback) => {
      if (contactForm === undefined) {
        callback();
        return;
      }
      contactForm.validateFields((err, values) => {
        if (err) {
          callback(err);
        }
        validatedValue.contactForm = values;
        callback();
      });
    };

    const seriesResult = (error) => {
      if (error) {
        Message.error(
          <span>
            Form validation error
          </span>);
        return;
      }
      const studentInfo = validatedValue;

      studentInfo.infoForm.tanggal_lahir =
      studentInfo.infoForm.tanggal_lahir ?
      studentInfo.infoForm.tanggal_lahir.format('YYYY-MM-DD') : '';

      studentInfo.id = this.state.student.id;

      console.log('Received values of form: ', studentInfo);

      axios.put(`/students/${studentInfo.id}`, studentInfo)
      .then((response) => {
        // console.dir(response);
        Message.success('Student updated successfully.');
        // form.resetFields();
        this.props.onStudentUpdated(studentInfo);
      })
      .catch((error) => {
        Message.error(
          <span>
            {error.message}<br />
            {error.response.data}
          </span>);
      });
    };
    series.push(validateInfoForm, validateEducationForm, validateContactForm);
    flow.series(series, seriesResult);
  }

  render() {
    return (

      <div className="student-info">
        <div className="sub-section-header">
          <div className="left">
            <ul className="the-ul">
              <li className="the-li">
                <Button shape="circle" icon="reload" />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Button
                  type="primary"
                  icon="save"
                  className="add-button"
                  onClick={this.handleUpdateStudentInfo}
                >
                  Simpan
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-section-content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Main" key="1">
              <WrappedStudentMainInfoForm
                ref={this.saveStudentInfoMainFormRef}
                student={this.props.student}
              />
            </TabPane>
            <TabPane tab="Pendidikan" key="2">
              <WrappedStudentEducationForm
                ref={this.saveStudentEducationFormRef}
                student={this.props.student}
              />
            </TabPane>
            <TabPane tab="Kontak" key="3">
              <WrappedStudentContactForm
                ref={this.saveStudentContactFormRef}
                student={this.props.student}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>

    );
  }
}
