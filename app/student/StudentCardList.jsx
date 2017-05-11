import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import StudentCard from './StudentCard';
import StudentStatusSelect from './components/StudentStatusSelect';
import StudentLevelRadio from './components/StudentLevelRadio';

export default class StudentCardList extends Component {

  static showDetails(student) {
    window.location.href = `#/studentdetail/${student.id}/info`;
  }

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentLevel: '1',
    };

    this.onStudentLevelSelect = this.onStudentLevelSelect.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  onStudentLevelSelect(e) {
    this.setState({ studentLevel: e.target.value });
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

  render() {
    const cardList = [];
    const colsPerRow = 3;
    let colList = [];
    const students = this.state.students;

    for (let i = 0; i < this.state.students.length; i += 1) {
      const student = students[i];

      colList.push(<Col key={i} span={8}>
        <StudentCard key={i} student={student} onDetailsClick={StudentCardList.showDetails} />
      </Col>);

      if (((i + 1) % colsPerRow) === 0) {
        cardList.push(
          <Row key={i} gutter={20}>
            {colList}
          </Row>,
        );
        colList = [];
      }
    }

    if (colList.length > 0) {
      cardList.push(
        <Row key="lastRow" gutter={20}>
          {colList}
        </Row>,
      );
    }

    const studentLevel = this.state.studentLevel;

    return (
      <div className="student-card-list">
        <div className="section-header">
          <div className="left">
            <ul className="the-ul">
              <li className="the-li">
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Nama atau Stambuk"
                />
              </li>
              <li className="the-li">
                <StudentStatusSelect />
              </li>
              <li className="the-li">
                <StudentLevelRadio value={studentLevel} onChange={this.onStudentLevelSelect} />
              </li>
              <li className="the-li">
                <Button shape="circle" icon="search" className="search-button" />
              </li>
              <li className="the-li">
                <Button shape="circle" type="primary" icon="download" />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Pagination simple defaultCurrent={1} total={50} />
              </li>
              <li className="the-li">
                <Button type="primary" icon="plus" className="add-button">
                  Siswa
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-list-content">
          <Row gutter={20}>
            {cardList}
          </Row>
        </div>
      </div>
    );
  }
}
