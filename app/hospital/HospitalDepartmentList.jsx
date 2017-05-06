import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import axios from 'axios';

export default class HospitalDepartmentList extends Component {

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

    return (

      <div className="hospital-department">
        <div className="header">
          <div className="left">
            <ul>
              <li>
                <Radio.Group value={searchFilter} onChange={this.handleSizeChange}>
                  <Radio.Button value="1" icon="plus"> 1 </Radio.Button>
                  <Radio.Button value="2"> 2 </Radio.Button>
                </Radio.Group>
              </li>
              <li>
                <Button shape="circle" icon="reload" className="search-button" />
              </li>
            </ul>
          </div>
          <div className="right">
            <Button type="primary" icon="plus" className="add-button">
              Bagian
            </Button>
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
