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
    axios.get('/students')
    .then((response) => {
      this.setState({
        students: [],
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Row gutter={20}>
        <Col span={8}><StudentCard /></Col>
        <Col span={8}><StudentCard /></Col>
        <Col span={8}><StudentCard /></Col>
      </Row>
    );
  }
}
