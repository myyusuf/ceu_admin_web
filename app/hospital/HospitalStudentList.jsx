import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';

const { RangePicker } = DatePicker;

export default class HospitalStudentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: ['MB1'],
      columns: [
        {
          title: 'Stambuk',
          dataIndex: 'stambuk',
          key: 'stambuk',
        }, {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
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
    axios.get('/hospitals/departments', {})
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

      <div className="hospital-student">
        <div className="header">
          <div className="left">
            <ul>
              <li>
                <RangePicker onChange={onChange} style={{ width: 250 }}/>
              </li>
              <li>
                <Button shape="circle" icon="search" className="search-button" />
              </li>
            </ul>
          </div>
          <div className="right">
          </div>
        </div>
        <div className="content">
          <Table
            size="medium"
            pagination={false}
            rowKey="kode"
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.hospitals}
          />
        </div>
      </div>
    );
  }
}
