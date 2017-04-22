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
      this.setState({
        students: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  sayHello(nama) {
    console.log(nama);
  }

  render() {
    const cardList = [];
    const students = this.state.students;
    for (let i = 0; i < this.state.students.length; i += 1) {
      const student = students[i];
      cardList.push(<Col key={i} span={8}>
        <StudentCard name={student.nama} onDetailsClick={this.sayHello} />
      </Col>);
    }

    return (
      <Row gutter={20}>
        {cardList}
      </Row>
    );
  }
}
