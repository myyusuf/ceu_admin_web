import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import InputNumber from 'antd/lib/input-number';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import axios from 'axios';

export default class DepartmentProblemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: ['MB1'],
      columns: [
        {
          title: 'Kode',
          dataIndex: 'kode',
          key: 'kode',
        }, {
          title: 'Keterangan',
          dataIndex: 'name',
          key: 'name',
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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: (newSelectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ selectedRowKeys: newSelectedRowKeys });
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
      getCheckboxProps: record => ({
        // disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };

    return (
      <div style={{ paddingBottom: 10 }}>
        <Row>
          <Col span={24}>
            <Table
              size="middle"
              pagination={false}
              rowKey="kode"
              rowSelection={rowSelection}
              columns={this.state.columns}
              dataSource={this.state.problems}
            />
          </Col>
        </Row>
        <Row style={{ margin: 10 }}>
          <Col span={6}>
            Jumlah mengulang Post-Test
          </Col>
          <Col span={12}>
            <InputNumber />
          </Col>
        </Row>
        <Row style={{margin: 10}}>
          <Col span={6}>
            Deskripsi Masalah
          </Col>
          <Col span={12}>
            <Input type="textarea" />
          </Col>
        </Row>
        <Row>
          <Col span={6} />
          <Col span={12}>
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </div>

    );
  }
}
