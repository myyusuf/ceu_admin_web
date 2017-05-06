import React, { Component } from 'react';
import Table from 'antd/lib/table';
import axios from 'axios';

export default class HospitalList extends Component {

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
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
        },
      ],
      hospitals: [],
    };
  }

  componentDidMount() {
    this.getTakenDepartmentProblems();
  }

  onSelectLevelChange(e) {
    this.setState({ selectedLevel: e.target.value });
  }

  getTakenDepartmentProblems() {
    axios.get('/hospitals', {})
    .then((response) => {
      this.setState({
        hospitals: response.data,
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
      <Table
        size="medium"
        pagination={false}
        rowKey="kode"
        rowSelection={rowSelection}
        columns={this.state.columns}
        dataSource={this.state.hospitals}
      />
    );
  }
}
