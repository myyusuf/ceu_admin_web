import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import axios from 'axios';
import StudentCard from './StudentCard';

export default class StudentCardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    this.showDetails = this.showDetails.bind(this);
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

    return (
      <div className="student-card-list">
        <div className="card-list-header">
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
