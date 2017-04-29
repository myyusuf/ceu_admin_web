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

export default class StudentCardList extends Component {

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
    if (this.props.onShowDetails) {
      this.onShowDetails(student);
    }
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

    const statusArray = [];
    statusArray.push(<Option key="1">Aktif</Option>);
    statusArray.push(<Option key="2">Bermasalah</Option>);
    statusArray.push(<Option key="3">Lulus</Option>);

    return (
      <div className="student-card-list">
        <div className="card-list-header">
          <div className="search">
            <ul>
              <li>
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Nama atau Stambuk"
                />
              </li>
              <li>
                <Select
                  mode="multiple"
                  style={{ minWidth: 100 }}
                  placeholder="Status"
                  defaultValue={['1']}
                  onChange={this.handleChange}
                >
                  {statusArray}
                </Select>
              </li>
              <li>
                <Radio.Group value={searchFilter} onChange={this.handleSizeChange}>
                  <Radio.Button value="1" icon="plus"> 1 </Radio.Button>
                  <Radio.Button value="2"> 2 </Radio.Button>
                </Radio.Group>
              </li>
              <li>
                <Button shape="circle" icon="search" className="search-button" />
              </li>
              <li>
                <Button shape="circle" type="primary" icon="download" />
              </li>
            </ul>
          </div>
          <div className="pagination">
            <Pagination simple defaultCurrent={1} total={50} />
          </div>
          <Button type="primary" icon="plus" className="add-button">
            Tambah Siswa
          </Button>
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

StudentCardList.propTypes = {
  onShowDetails: React.PropTypes.any,
};
