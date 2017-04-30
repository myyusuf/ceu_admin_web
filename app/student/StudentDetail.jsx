import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import StudentCard from './StudentCard';
import StudentInfo from './StudentInfo';

const Option = Select.Option;

export default class StudentDetail extends Component {

  constructor(props) {
    super(props);

    const location = this.props.location.pathname;

    let selectedDetail = '';

    if (location.indexOf('info') > 0) {
      selectedDetail = '1';
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
    }else{
      window.location.href = `#${this.props.match.url}/departments`;
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
              <Radio.Button value="1">Bagian Diambil</Radio.Button>
              <Radio.Button value="2">Nilai MPPD</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route path={`${this.props.match.url}/info`}>
              <StudentInfo student={this.state.student} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
