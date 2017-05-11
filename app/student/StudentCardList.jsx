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

const PAGE_SIZE = 10;

export default class StudentCardList extends Component {

  static showDetails(student) {
    window.location.href = `#/studentdetail/${student.id}/info`;
  }

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentLevel: '1',
      searchText: '',
      currentPage: 1,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onStudentLevelSelect = this.onStudentLevelSelect.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value }, () => {
      this.getStudents();
    });
  }

  onStudentLevelSelect(e) {
    this.setState({ studentLevel: e.target.value }, () => {
      this.getStudents();
    });
  }

  onPageChange(page) {
    this.setState({ currentPage: page }, () => {
      this.getStudents();
    });
  }

  onSearch() {
    console.log('click');
    this.getStudents();
  }

  getStudents() {
    axios.get('/students', {
      params: {
        pagesize: PAGE_SIZE,
        pagenum: this.state.currentPage,
        studentLevel: this.state.studentLevel,
        searchText: this.state.searchText,
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
                  onChange={this.onSearchTextChange}
                />
              </li>
              <li className="the-li">
                <StudentStatusSelect />
              </li>
              <li className="the-li">
                <StudentLevelRadio value={studentLevel} onChange={this.onStudentLevelSelect} />
              </li>
              <li className="the-li">
                <Button
                  shape="circle"
                  icon="search"
                  className="search-button"
                  onClick={this.onSearch}
                />
              </li>
              <li className="the-li">
                <Button shape="circle" type="primary" icon="download" />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Pagination simple defaultCurrent={1} total={50} onChange={this.onPageChange} />
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
