import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import StudentList from '../student/StudentList';
// import ScoreList from './ScoreList';

const Option = Select.Option;

export default class ScheduleMppd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchFilter: '1',
    };

    this.showDetails = this.showDetails.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents() {
    axios.get('/schedule/mppd', {
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

  showDetails(student) {
    // if (this.props.onShowDetails) {
    //   this.onShowDetails(student);
    // }

    window.location.href = `#/studentdetail/${student.id}/info`;
  }

  handleSizeChange(e) {
    this.setState({ searchFilter: e.target.value });
  }

  handleChange(value) {
    console.log(value);
  }

  render() {
    const departments = [];
    departments.push(<Option key="1">Anak</Option>);
    departments.push(<Option key="2">Interna</Option>);
    departments.push(<Option key="3">Radiologi</Option>);
    departments.push(<Option key="4">Neurologi</Option>);
    departments.push(<Option key="5">Kulit dan Kelamin</Option>);
    departments.push(<Option key="6">Kardiologi TK 1</Option>);

    return (
      <div className="schedule-mppd">
        <div className="header">
          <div className="left">
            <ul>
              <li className="the-li">
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Kode atau Nama"
                />
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
            <ul>
              <li className="the-li">
                <Pagination simple defaultCurrent={1} total={50} />
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <StudentList />
          </div>
          <div className="right">
          </div>
        </div>
      </div>
    );
  }
}

ScheduleMppd.propTypes = {
  onShowDetails: React.PropTypes.any,
};
