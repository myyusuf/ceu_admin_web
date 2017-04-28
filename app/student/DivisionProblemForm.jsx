import React, { Component } from 'react';
import Table from 'antd/lib/table';
import axios from 'axios';

export default class DivisionProblemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Kode',
          dataIndex: 'kode',
          key: 'kode',
        }, {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
      ],
      problems: [],
    };
  }

  componentDidMount() {
    this.getTakenDivisionProblems();
  }

  getTakenDivisionProblems() {
    axios.get('/takendivisionproblems', {})
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
    const rowSelection = {
      selectedRowKeys: ['MB1'],
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
      getCheckboxProps: record => ({
        value: 'checked',
        // disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };

    return (
      <Table
        rowKey="kode"
        rowSelection={rowSelection}
        columns={this.state.columns}
        dataSource={this.state.problems}
      />
    );
  }
}
