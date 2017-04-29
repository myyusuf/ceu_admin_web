import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import axios from 'axios';

export default class TakenDepartmentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      takenDepartments: [],
    };

    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    this.getTakenDepartments();
  }

  getTakenDepartments() {
    // axios.get('/students', {
    //   params: {
    //     pagesize: 10,
    //     pagenum: 0,
    //     level: 1,
    //   },
    // })
    // .then((response) => {
    //   this.setState({
    //     students: response.data.data,
    //   });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];

    this.setState({
      takenDepartments: data,
    });
  }

  showDetails(takenDepartment) {
    if (this.props.onShowDetails) {
      this.onShowDetails(takenDepartment);
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Button style={{ margin: 10 }} onClick={this.showDetails}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={this.state.columns} dataSource={this.state.takenDepartments} />
          </Col>
        </Row>
      </div>
    );
  }
}
