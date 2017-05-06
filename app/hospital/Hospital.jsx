import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import StudentCard from '../student/StudentCard';

const Option = Select.Option;

export default class Hospital extends Component {

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
    const cardList = [];
    const colsPerRow = 3;
    let colList = [];
    const students = this.state.students;

    for (let i = 0; i < this.state.students.length; i += 1) {
      const student = students[i];

      colList.push(<Col key={i} span={8}>
        <StudentCard key={i} student={student} onDetailsClick={this.showDetails} />
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

    const searchFilter = this.state.searchFilter;

    const hospitalTypes = [];
    hospitalTypes.push(<Option key="1">Rumah Sakit</Option>);
    hospitalTypes.push(<Option key="2">Klinik</Option>);

    return (
      <div className="hospital">
        <div className="header">
          <div className="search">
            <ul>
              <li>
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Kode atau Nama"
                />
              </li>
              <li>
                <Select
                  mode="multiple"
                  style={{ minWidth: 100 }}
                  placeholder="Tipe RUmah Sakit"
                  defaultValue={['1']}
                  onChange={this.handleChange}
                >
                  {hospitalTypes}
                </Select>
              </li>
              <li>
                <Button shape="circle" icon="search" className="search-button" />
              </li>
              <li>
                <Button shape="circle" type="primary" icon="download" />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li className="the-li">
                <Pagination simple defaultCurrent={1} total={50} />
              </li>
              <li className="the-li">
                <Button type="primary" icon="plus" className="add-button">
                  Rumah Sakit
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="left">

          </div>
          <div className="center">

          </div>
          <div className="right">

          </div>
        </div>
      </div>
    );
  }
}

Hospital.propTypes = {
  onShowDetails: React.PropTypes.any,
};
