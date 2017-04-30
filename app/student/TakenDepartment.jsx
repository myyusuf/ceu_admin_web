import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Table from 'antd/lib/table';
import axios from 'axios';

export default class TakenDepartment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: props.student,
      takenDepartments: [],
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
    };

    this.onSelectLevelChange = this.onSelectLevelChange.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
  }

  onSelectLevelChange(e) {
    this.setState({ selectedLevel: e.target.value });
  }

  getDepartments() {
    const url = `/takendepartments/${this.state.student}`;
    axios.get(url, {
      params: {},
    })
    .then((response) => {
      this.setState({
        takenDepartments: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const selectedLevel = this.state.selectedLevel;
    return (
      <div className="taken-department">
        <div className="header">
          <div className="search">
            <ul>
              <li>
                <Radio.Group value={selectedLevel} onChange={this.onSelectLevelChange}>
                  <Radio.Button value="1"> 1 </Radio.Button>
                  <Radio.Button value="2"> 2 </Radio.Button>
                </Radio.Group>
              </li>
            </ul>
          </div>
          <Button type="primary" icon="plus" className="add-button">
            Tambah Bagian
          </Button>
        </div>
        <div className="content">
          <Table
            size="medium"
            pagination={false}
            rowKey="kode"
            columns={this.state.columns}
            dataSource={this.state.takenDepartments}
          />
        </div>
      </div>
    );
  }
}
