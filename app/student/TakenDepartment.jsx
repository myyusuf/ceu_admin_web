import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Table from 'antd/lib/table';
import axios from 'axios';

import TakenDepartmentDetail from './TakenDepartmentDetail';

export default class TakenDepartment extends Component {

  constructor(props) {
    super(props);

    const rowSelection = {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        this.onTakenDepartmentSelected(record);
      },
    };

    this.state = {
      student: this.props.student,
      takenDepartments: [],
      selectedTakenDepartment: null,
      selectedLevel: '1',
      columns: [
        {
          title: 'Nama bagian',
          dataIndex: 'nama',
          key: 'nama',
        }, {
          title: 'Judul',
          dataIndex: 'judul',
          key: 'judul',
        },
      ],
      rowSelection,
    };

    this.onSelectLevelChange = this.onSelectLevelChange.bind(this);
    this.onTakenDepartmentSelected = this.onTakenDepartmentSelected.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
  }

  onSelectLevelChange(e) {
    this.setState({ selectedLevel: e.target.value });
  }

  onTakenDepartmentSelected(record) {
    this.setState({
      selectedTakenDepartment: record,
    });
  }

  getDepartments() {
    const url = `/takendepartments/${this.state.student.id}`;
    axios.get(url, {
      params: {},
    })
    .then((response) => {
      this.setState({
        takenDepartments: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const selectedLevel = this.state.selectedLevel;

    let takenDepartmentDetail = <div>Select Department</div>;

    if (this.state.selectedTakenDepartment !== null) {
      takenDepartmentDetail = (
        <TakenDepartmentDetail
          takenDepartment={this.state.selectedTakenDepartment}
        />
      );
    }

    return (
      <div className="taken-department">
        <div className="sub-section-header">
          <div className="left">
            <ul className="the-ul">
              <li className="the-li">
                <Radio.Group value={selectedLevel} onChange={this.onSelectLevelChange}>
                  <Radio.Button value="1"> 1 </Radio.Button>
                  <Radio.Button value="2"> 2 </Radio.Button>
                </Radio.Group>
              </li>
              <li className="the-li">
                <Button shape="circle" icon="reload" />
              </li>
              <li className="the-li">
                <Button shape="circle" type="primary" icon="download" />
              </li>
              <li className="the-li">
                <Button style={{ marginLeft: 20 }} icon="menu-unfold">Chart</Button>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Button type="primary" icon="plus" className="add-button">
                  Bagian
                </Button>
              </li>
            </ul>
          </div>

        </div>
        <div className="content">
          <div className="left">
            <Table
              size="medium"
              pagination={false}
              rowKey="judul"
              columns={this.state.columns}
              dataSource={this.state.takenDepartments}
              rowSelection={this.state.rowSelection}
            />
          </div>
          <div className="right">
            {takenDepartmentDetail}
          </div>

        </div>
      </div>
    );
  }
}
