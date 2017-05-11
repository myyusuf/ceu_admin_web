import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import Message from 'antd/lib/message';
import Table from 'antd/lib/table';
import axios from 'axios';
import StudentLevelRadio from '../student/components/StudentLevelRadio';

export default class DepartmentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      searchText: '',
      studentLevel: '1',
      loading: false,
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        }, {
          title: 'Kode',
          dataIndex: 'kode',
          key: 'kode',
        }, {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
        },
      ],
    };

    this.showDetails = this.showDetails.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onStudentLevelSelect = this.onStudentLevelSelect.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onStudentLevelSelect(e) {
    this.setState({ studentLevel: e.target.value });
  }

  onSearch() {
    this.setState({ departments: [] }, () => {
      this.getDepartments();
    });
  }

  getDepartments() {
    this.setState({ loading: true }, () => {
      axios.get('/departments', {
        params: {
          searchText: this.state.searchText,
          studentLevel: this.state.studentLevel,
        },
      })
      .then((response) => {
        this.setState({
          departments: response.data,
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

  showDetails(department) {
    // if (this.props.onShowDetails) {
    //   this.onShowDetails(student);
    // }

    window.location.href = `#/studentdetail/${student.id}/info`;
  }

  render() {
    return (
      <div className="score">
        <div className="section-header">
          <div className="left">
            <ul>
              <li className="the-li">
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Kode atau Nama"
                  onChange={this.onSearchTextChange}
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
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Pagination simple defaultCurrent={1} total={50} />
              </li>
              <li className="the-li">
                <Button type="primary" icon="plus" className="add-button">
                  Bagian
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Table
            size="middle"
            pagination={false}
            loading={this.state.loading}
            rowKey="id"
            columns={this.state.columns}
            dataSource={this.state.departments}
          />
        </div>
      </div>
    );
  }
}

DepartmentList.propTypes = {
  onShowDetails: React.PropTypes.any,
};
