import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';

const { RangePicker } = DatePicker;

export default class ScoreList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: ['MB1'],
      columns: [
        {
          title: 'Tanggal',
          dataIndex: 'tanggal',
          key: 'tanggal',
        }, {
          title: 'Nilai',
          dataIndex: 'nilai',
          key: 'nilai',
        },
      ],
      hospitals: [],
      searchFilter: '1',
    };
  }

  componentDidMount() {
    this.getTakenDepartmentProblems();
  }

  onSelectLevelChange(e) {
    this.setState({ selectedLevel: e.target.value });
  }

  getTakenDepartmentProblems() {
    axios.get('/students', {})
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
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        this.onTakenDepartmentSelected(record);
      },
    };

    const searchFilter = this.state.searchFilter;

    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    return (
      <Table
        size="medium"
        pagination={false}
        rowKey="stambuk"
        rowSelection={rowSelection}
        columns={this.state.columns}
        dataSource={this.state.hospitals}
      />
    );
  }
}
