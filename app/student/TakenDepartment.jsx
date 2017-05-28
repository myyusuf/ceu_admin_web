import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';
import Radio from 'antd/lib/radio';
import Table from 'antd/lib/table';
import Form from 'antd/lib/form';
import Message from 'antd/lib/message';
import axios from 'axios';

import TakenDepartmentDetail from './TakenDepartmentDetail';
import AddTakenDepartmentForm from './taken_department/AddTakenDepartmentForm';
import AddTakenDepartmentByLevelForm from './taken_department/AddTakenDepartmentByLevelForm';

const WrappedAddTakenDepartmentForm = Form.create()(AddTakenDepartmentForm);
const WrappedAddTakenDepartmentByLevelForm = Form.create()(AddTakenDepartmentByLevelForm);

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
      addTakenDepartmentByLevelFormVisible: false,
    };

    this.onSelectLevelChange = this.onSelectLevelChange.bind(this);
    this.onTakenDepartmentSelected = this.onTakenDepartmentSelected.bind(this);
    this.onAddButtonPressed = this.onAddButtonPressed.bind(this);

    this.saveAddTakenDepartmentFormRef = this.saveAddTakenDepartmentFormRef.bind(this);
    this.handleCancelAdd = this.handleCancelAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.saveAddTakenDepartmentByLevelFormRef =
    this.saveAddTakenDepartmentByLevelFormRef.bind(this);
    this.handleCancelAddByLevel = this.handleCancelAddByLevel.bind(this);
    this.handleAddByLevel = this.handleAddByLevel.bind(this);
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
    const theThis = this;
    if (e.key === '1') {
      theThis.setState({ addTakenDepartmentByLevelFormVisible: true });
    } else if (e.key === '2') {
      theThis.setState({ addTakenDepartmentFormVisible: true });
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

  saveAddTakenDepartmentByLevelFormRef(form) {
    this.addTakenDepartmentByLevelForm = form;
  }

  handleCancelAdd() {
    const form = this.addTakenDepartmentForm;
    form.resetFields();
    this.setState({ addTakenDepartmentFormVisible: false });
  }

  handleCancelAddByLevel() {
    const form = this.addTakenDepartmentByLevelForm;
    form.resetFields();
    this.setState({ addTakenDepartmentByLevelFormVisible: false });
  }

  handleAddByLevel(level) {
    const form = this.addTakenDepartmentByLevelForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const formData = values;
      formData.studentId = this.state.student.id;
      axios.post('/createtakendepartments_bylevel', formData)
      .then((response) => {
        // console.dir(response);
        Message.success('Taken department added successfully.');
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

  handleAdd() {
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

    let takenDepartmentDetail = (
      <div className="empty-taken-department">
        <div>
          <span>Select Department</span>
          <img src="assets/images/icons/about.png" alt="Info" />
        </div>
      </div>
      );

    if (this.state.selectedTakenDepartment !== null) {
      takenDepartmentDetail = (
        <TakenDepartmentDetail
          takenDepartment={this.state.selectedTakenDepartment}
        />
      );
    }

    const menu = (
      <Menu onClick={this.onAddButtonPressed} value={1}>
        <Menu.Item key="1">+ Tingkat</Menu.Item>
        <Menu.Item key="2">+ Bagian</Menu.Item>
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
              size="middle"
              style={{ height: 100 }}
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
            onCreate={this.handleAdd}
          />
          <WrappedAddTakenDepartmentByLevelForm
            ref={this.saveAddTakenDepartmentByLevelFormRef}
            visible={this.state.addTakenDepartmentByLevelFormVisible}
            onCancel={this.handleCancelAddByLevel}
            onCreate={this.handleAddByLevel}
          />
        </div>
      </div>
    );
  }
}
