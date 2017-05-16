import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Message from 'antd/lib/message';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import Spin from 'antd/lib/spin';
import axios from 'axios';
import StudentCard from './StudentCard';
import StudentStatusSelect from './components/StudentStatusSelect';
import StudentLevelRadio from './components/StudentLevelRadio';
import StudentCreateForm from './StudentCreateForm';

const PAGE_SIZE = 10;

export default class StudentCardList extends Component {

  static showDetails(student) {
    window.location.href = `#/studentdetail/${student.id}/info`;
  }

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentStatus: ['1'],
      studentLevel: '1',
      searchText: '',
      pageNum: 1,
      totalRecords: 0,
      loading: false,
      createStudentFormVisible: false,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onStudentStatusSelect = this.onStudentStatusSelect.bind(this);
    this.onStudentLevelSelect = this.onStudentLevelSelect.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.saveCreateStudentFormRef = this.saveCreateStudentFormRef.bind(this);
    this.onOpenCreateStudentForm = this.onOpenCreateStudentForm.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.handleCreateStudent = this.handleCreateStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onStudentStatusSelect(value) {
    this.setState({ studentStatus: value });
  }

  onStudentLevelSelect(e) {
    this.setState({ studentLevel: e.target.value });
  }

  onPageChange(page) {
    this.setState({ pageNum: page }, () => {
      this.getStudents();
    });
  }

  onSearch() {
    this.setState({ students: [] }, () => {
      this.getStudents();
    });
  }

  onOpenCreateStudentForm() {
    this.setState({ createStudentFormVisible: true });
  }

  handleCancelCreate() {
    const form = this.createStudentForm;
    form.resetFields();
    this.setState({ createStudentFormVisible: false });
  }

  saveCreateStudentFormRef(form) {
    this.createStudentForm = form;
  }

  getStudents() {
    this.setState({ loading: true }, () => {
      axios.get('/students', {
        params: {
          pagesize: PAGE_SIZE,
          pagenum: this.state.pageNum,
          studentLevel: this.state.studentLevel,
          studentStatus: this.state.studentStatus,
          searchText: this.state.searchText,
        },
      })
      .then((response) => {
        this.setState({
          students: response.data.data,
          totalRecords: response.data.totalRecords,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.dir(error);
        let errorMessage = 'Error occured when doing server request.\n';
        if (error.message) {
          errorMessage += error.message;
        }
        Message.error(errorMessage);
      });
    });
  }

  handleCreateStudent() {
    const form = this.createStudentForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.post('/students', values)
      .then((response) => {
        // console.dir(response);
        Message.success('Student created successfully.');
        form.resetFields();
        this.setState({
          createStudentFormVisible: false,
        }, () => {
          this.getStudents();
        });
      })
      .catch((error) => {
        console.dir(error);
        Message.error(
          <span>
            {error.message}<br />
          </span>);
      });
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
                <StudentStatusSelect
                  values={this.state.studentStatus}
                  onChange={this.onStudentStatusSelect}
                />
              </li>
              <li className="the-li">
                <StudentLevelRadio
                  value={this.state.studentLevel}
                  onChange={this.onStudentLevelSelect}
                />
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
                <Pagination
                  simple defaultCurrent={1}
                  total={this.state.totalRecords}
                  onChange={this.onPageChange}
                />
              </li>
              <li className="the-li">
                <Button
                  type="primary"
                  icon="plus"
                  className="add-button"
                  onClick={this.onOpenCreateStudentForm}
                >
                  Siswa
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-list-content">
          <Spin spinning={this.state.loading}>
            <Row gutter={20}>
              {cardList}
            </Row>
          </Spin>
        </div>

        <StudentCreateForm
          ref={this.saveCreateStudentFormRef}
          visible={this.state.createStudentFormVisible}
          onCancel={this.handleCancelCreate}
          onCreate={this.handleCreateStudent}
        />
      </div>
    );
  }
}
