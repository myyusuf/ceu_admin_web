import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import InputNumber from 'antd/lib/input-number';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import axios from 'axios';

export default class DepartmentLetterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Kode',
          dataIndex: 'kode',
          key: 'kode',
        }, {
          title: 'Judul',
          dataIndex: 'judul',
          key: 'judul',
        },
      ],
      problems: [],
    };
  }

  componentDidMount() {
    this.getTakenDepartmentProblems();
  }

  getTakenDepartmentProblems() {
    axios.get('/takendepartmentproblems', {})
    .then((response) => {
      this.setState({
        problems: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Table
              pagination={false}
              rowKey="kode"
              columns={this.state.columns}
              dataSource={this.state.problems}
            />
          </Col>
        </Row>
        <Row style={{ margin: 10 }}>
          <Col span={12} />
          <Col span={12}>
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </div>

    );
  }
}
