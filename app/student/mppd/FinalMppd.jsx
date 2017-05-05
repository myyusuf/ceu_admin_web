import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';
import axios from 'axios';

export default class FinalMppd extends Component {

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
          title: 'Nilai CBT',
          dataIndex: 'nilai_cbt',
          key: 'nilai_cbt',
        }, {
          title: 'Nilai OSCE',
          dataIndex: 'nilai_osce',
          key: 'nilai_osce',
        },
      ],
      problems: [],
    };
  }

  componentDidMount() {
    this.getTakenDepartmentProblems();
  }

  onSelectLevelChange(e) {
    this.setState({ selectedLevel: e.target.value });
  }

  getTakenDepartmentProblems() {
    axios.get('/student/mppd/finalmppd', {})
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

    const selectedLevel = this.state.selectedLevel;

    return (
      <div className="kompre">
        <div className="header">
          <div className="search">
            <ul>
              <li>
                <Radio.Group value={selectedLevel} onChange={this.onSelectLevelChange}>
                  <Radio.Button value="1"> 1 </Radio.Button>
                  <Radio.Button value="2"> 2 </Radio.Button>
                </Radio.Group>
              </li>
              <li>
                <Button shape="circle" icon="reload" />
              </li>
            </ul>
          </div>
          <Button type="primary" icon="plus" className="add-button">
            Simpan
          </Button>
        </div>
        <div className="content">
          <Table
            size="medium"
            pagination={false}
            rowKey="kode"
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.problems}
          />

        </div>
      </div>
    );
  }
}
