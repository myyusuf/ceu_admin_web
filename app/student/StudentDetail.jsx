import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import StudentCard from './StudentCard';

const Option = Select.Option;

export default class StudentDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      student: {},
      studentId: this.props.match.params.studentId,
    };
  }

  componentDidMount() {
    this.getStudent();
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
    console.dir(this.props);
    const student = this.state.student;
    let stambuk = '';
    if (student.stambuk_lama && student.stambuk_baru) {
      stambuk = `${student.stambuk_lama} - ${student.stambuk_baru}`;
    }
    return (
      <div className="student-detail">
        <div className="student-detail-header">
          <div className="avatar-container">
            <img className="avatar" src="assets/images/avatar.png" alt="Avatar" />
            <span className="student-name">{student.nama}</span>
            <span className="stambuk">{stambuk}</span>
          </div>

        </div>
      </div>
    );
  }
}
