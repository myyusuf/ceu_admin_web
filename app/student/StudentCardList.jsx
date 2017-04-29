import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import StudentCard from './StudentCard';

export default class StudentCardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchFilter: 'aktif',
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

    return (
      <div className="student-card-list">
        <div className="card-list-header">
          <Input
            className="search-text"
            placeholder="Nama atau Stambuk"
          />
          <Button shape="circle" icon="search" className="search-button" />
          <Button shape="circle" type="primary" icon="download" className="download-button" />
          <div className="filter-button">
            <Radio.Group value={searchFilter} onChange={this.handleSizeChange}>
              <Radio.Button value="aktif" icon="plus">Aktif</Radio.Button>
              <Radio.Button value="bermasalah">Bermasalah</Radio.Button>
              <Radio.Button value="lulus">Lulus</Radio.Button>
            </Radio.Group>
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
