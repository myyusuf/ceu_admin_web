import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import axios from 'axios';
import StudentCard from './StudentCard';

export default class StudentCardList extends Component {

  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents() {
    axios.get('/students', {
      params: {
        pagesize: 10,
        pagenum: 0,
        level: 1,
      },
    })
    .then((response) => {
      console.log(response);
      this.setState({
        students: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const cardList = [];
    const students = this.state.students;
    for (let i = 0; i < this.state.students.length; i += 1) {
      const student = students[i];
      console.log(student);
      cardList.push(<Col span={8}><StudentCard name={student.nama} /></Col>);
    }

    return (
      <Row gutter={20}>
        {cardList}
      </Row>
    );
  }
}
