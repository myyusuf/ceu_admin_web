import React, { Component } from 'react';
import Radio from 'antd/lib/radio';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import StudentInfo from './StudentInfo';
import TakenDepartmentDetail from './TakenDepartmentDetail';

export default class StudentDetail extends Component {

  constructor(props) {
    super(props);

    const location = this.props.location.pathname;

    let selectedDetail = '';

    if (location.indexOf('info') > 0) {
      selectedDetail = '1';
    } else if (location.indexOf('departments') > 0) {
      selectedDetail = '2';
    } else {
      selectedDetail = '3';
    }

    this.state = {
      student: {},
      studentId: this.props.match.params.studentId,
      selectedDetail,
    };

    this.onSelectDetailChange = this.onSelectDetailChange.bind(this);
  }

  componentDidMount() {
    this.getStudent();
  }

  onSelectDetailChange(e) {
    if (e.target.value === '1') {
      window.location.href = `#${this.props.match.url}/info`;
    } else if (e.target.value === '2') {
      window.location.href = `#${this.props.match.url}/departments`;
    } else {
      window.location.href = `#${this.props.match.url}/mppd`;
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

  render() {
    const student = this.state.student;
    let stambuk = '';
    if (student.stambuk_lama && student.stambuk_baru) {
      stambuk = `${student.stambuk_lama} - ${student.stambuk_baru}`;
    }

    const selectedDetail = this.state.selectedDetail;

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
            </Radio.Group>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route path={`${this.props.match.url}/info`}>
              <StudentInfo student={this.state.student} />
            </Route>
            <Route path={`${this.props.match.url}/departments`}>
              <TakenDepartmentDetail />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
