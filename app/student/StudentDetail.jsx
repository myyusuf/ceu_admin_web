import React, { Component } from 'react';
import Radio from 'antd/lib/radio';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import StudentInfoForm from './StudentInfoForm';
import TakenDepartment from './TakenDepartment';
import Mppd from './mppd/Mppd';

export default class StudentDetail extends Component {

  constructor(props) {
    super(props);

    const location = this.props.location.pathname;

    let selectedDetail = '';

    if (location.indexOf('info') > 0) {
      selectedDetail = '1';
    } else if (location.indexOf('departments') > 0) {
      selectedDetail = '2';
    } else if (location.indexOf('mppd') > 0) {
      selectedDetail = '3';
    } else {
      selectedDetail = '4';
    }

    this.state = {
      student: null,
      studentId: this.props.match.params.studentId,
      selectedDetail,
    };

    this.onSelectDetailChange = this.onSelectDetailChange.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  componentDidMount() {
    this.getStudent();
  }

  onSelectDetailChange(e) {
    if (e.target.value === '1') {
      window.location.href = `#${this.props.match.url}/info`;
    } else if (e.target.value === '2') {
      window.location.href = `#${this.props.match.url}/departments`;
    } else if (e.target.value === '3') {
      window.location.href = `#${this.props.match.url}/mppd`;
    } else {
      window.location.href = `#${this.props.match.url}/problem`;
    }
    this.setState({ selectedDetail: e.target.value });
  }

  getStudent() {
    const url = `/students/${this.state.studentId}`;
    axios.get(url, {
      params: {},
    })
    .then((response) => {
      this.setState({
        student: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateStudent(student) {
    this.getStudent();
  }

  render() {
    const student = this.state.student || {};
    let stambuk = '';
    if (student.stambuk_lama && student.stambuk_baru) {
      stambuk = `${student.stambuk_lama} - ${student.stambuk_baru}`;
    }

    const selectedDetail = this.state.selectedDetail;
    let children = <div />;
    if (this.state.student !== null) {
      children = (
        <Switch>
          <Route path={`${this.props.match.url}/info`}>
            <StudentInfoForm student={this.state.student} onStudentUpdated={this.updateStudent} />
          </Route>
          <Route path={`${this.props.match.url}/departments`}>
            <TakenDepartment student={this.state.student} />
          </Route>
          <Route path={`${this.props.match.url}/mppd`}>
            <Mppd student={this.state.student} />
          </Route>
        </Switch>
      )
    }

    return (
      <div className="student-detail">
        <div className="student-detail-header">
          <div className="avatar-container">
            <img className="avatar" src="assets/images/avatar.png" alt="Avatar" />
            <span className="student-name">{student.nama}</span>
            <span className="stambuk">{stambuk}</span>
          </div>
          <div className="detail-select">
            <Radio.Group value={selectedDetail} onChange={this.onSelectDetailChange}>
              <Radio.Button value="1">Info</Radio.Button>
              <Radio.Button value="2">Bagian Diambil</Radio.Button>
              <Radio.Button value="3">Nilai MPPD</Radio.Button>
              <Radio.Button value="4">Masalah</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}
