import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';
import Radio from 'antd/lib/radio';
import Table from 'antd/lib/table';
import Modal from 'antd/lib/modal';
import Form from 'antd/lib/form';
import Message from 'antd/lib/message';
import axios from 'axios';

import TakenDepartmentDetail from './TakenDepartmentDetail';
import AddTakenDepartmentForm from './taken_department/AddTakenDepartmentForm';

const confirm = Modal.confirm;
const WrappedAddTakenDepartmentForm = Form.create()(AddTakenDepartmentForm);

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
      addTakenDepartmentFormVisible: false,
    };

    this.onSelectLevelChange = this.onSelectLevelChange.bind(this);
    this.onTakenDepartmentSelected = this.onTakenDepartmentSelected.bind(this);
    this.onAddButtonPressed = this.onAddButtonPressed.bind(this);

    this.saveAddTakenDepartmentFormRef = this.saveAddTakenDepartmentFormRef.bind(this);
    this.handleCancelAdd = this.handleCancelAdd.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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

  onAddButtonPressed(e) {
    if (e.key === '1') {
      confirm({
        title: 'Tambah Bagian Tingkat 1',
        content: 'Anda akan menambah semua bagian tingkat 1.',
        onOk() {
        },
        onCancel() {
          // console.log('Cancel');
        },
      });
    } else if (e.key === '2') {
      confirm({
        title: 'Tambah Bagian Tingkat 2',
        content: 'Anda akan menambah semua bagian tingkat 2.',
        onOk() {
        },
        onCancel() {
          // console.log('Cancel');
        },
      });
    } else if (e.key === '3') {
      this.setState({ addTakenDepartmentFormVisible: true });
    }
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

  saveAddTakenDepartmentFormRef(form) {
    this.addTakenDepartmentForm = form;
  }

  handleCancelAdd() {
    const form = this.addTakenDepartmentForm;
    form.resetFields();
    this.setState({ addTakenDepartmentFormVisible: false });
  }

  handleCreate() {
    const form = this.addTakenDepartmentForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.post('/takendepartments', values)
      .then((response) => {
        // console.dir(response);
        Message.success('Taken department added successfully.');
        form.resetFields();
        this.setState({
          createDepartmentFormVisible: false,
        }, () => {
          this.getDepartments();
        });
      })
      .catch((error) => {
        Message.error(
          <span>
            {error.message}<br />
            {error.response.data}
          </span>);
      });
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

    const menu = (
      <Menu onClick={this.onAddButtonPressed}>
        <Menu.Item key="1">+ Tingkat 1</Menu.Item>
        <Menu.Item key="2">+ Tingkat 2</Menu.Item>
        <Menu.Item key="3">+ Bagian</Menu.Item>
      </Menu>
    );

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
                <Dropdown overlay={menu}>
                  <Button>
                    Tambah Bagian <Icon type="down" />
                  </Button>
                </Dropdown>
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
          <WrappedAddTakenDepartmentForm
            ref={this.saveAddTakenDepartmentFormRef}
            visible={this.state.addTakenDepartmentFormVisible}
            onCancel={this.handleCancelAdd}
            onCreate={this.handleCreate}
          />
        </div>
      </div>
    );
  }
}
