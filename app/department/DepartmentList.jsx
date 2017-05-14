import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Message from 'antd/lib/message';
import Table from 'antd/lib/table';
import axios from 'axios';
import StudentLevelRadio from '../student/components/StudentLevelRadio';
import DepartmentCreateForm from './DepartmentCreateForm';
import DepartmentUpdateForm from './DepartmentUpdateForm';

export default class DepartmentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      searchText: '',
      studentLevel: '1',
      loading: false,
      createDepartmentFormVisible: false,
      updateDepartmentFormVisible: false,
      departmentToUpdate: {},
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        }, {
          title: 'Kode',
          dataIndex: 'kode',
          key: 'kode',
        }, {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
        }, {
          title: 'Action',
          key: 'action',
          render: (text, record) => {
            return (
              <span>
                <Button
                  icon="edit"
                  type="dashed"
                  style={{ marginRight: 15 }}
                  onClick={() => { this.onOpenUpdateDepartmentForm(record); }}
                />
                <Button
                  icon="delete"
                  type="dashed"
                  onClick={() => { this.onOpenUpdateDepartmentForm(record); }}
                />
              </span>
            );
          },
        },
      ],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onStudentLevelSelect = this.onStudentLevelSelect.bind(this);

    this.saveCreateDepartmentFormRef = this.saveCreateDepartmentFormRef.bind(this);
    this.onOpenCreateDepartmentForm = this.onOpenCreateDepartmentForm.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.handleCreateDepartment = this.handleCreateDepartment.bind(this);

    this.saveUpdateDepartmentFormRef = this.saveUpdateDepartmentFormRef.bind(this);
    this.onOpenUpdateDepartmentForm = this.onOpenUpdateDepartmentForm.bind(this);
    this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
    this.handleUpdateDepartment = this.handleUpdateDepartment.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onStudentLevelSelect(e) {
    this.setState({ studentLevel: e.target.value });
  }

  onSearch() {
    this.setState({ departments: [] }, () => {
      this.getDepartments();
    });
  }

  onOpenCreateDepartmentForm() {
    this.setState({ createDepartmentFormVisible: true });
  }

  onOpenUpdateDepartmentForm(record) {
    console.dir(record);
    this.setState({
      departmentToUpdate: record,
      updateDepartmentFormVisible: true,
    });
  }

  handleCancelCreate() {
    const form = this.createDepartmentForm;
    form.resetFields();
    this.setState({ createDepartmentFormVisible: false });
  }

  saveCreateDepartmentFormRef(form) {
    this.createDepartmentForm = form;
  }

  handleCloseUpdate() {
    const form = this.updateDepartmentForm;
    form.resetFields();
    this.setState({ updateDepartmentFormVisible: false });
  }

  saveUpdateDepartmentFormRef(form) {
    this.updateDepartmentForm = form;
  }

  getDepartments() {
    this.setState({ loading: true }, () => {
      axios.get('/departments', {
        params: {
          searchText: this.state.searchText,
          studentLevel: this.state.studentLevel,
        },
      })
      .then((response) => {
        this.setState({
          departments: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.dir(error);
        let errorMessage = 'Error occured when doing server request.\n';
        if (error.message) {
          errorMessage += error.message;
        }
        Message.error(errorMessage);
      });
    });
  }

  handleCreateDepartment() {
    const form = this.createDepartmentForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.post('/departments', values)
      .then((response) => {
        // console.dir(response);
        Message.success('Department created successfully.');
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

  handleUpdateDepartment() {
    const form = this.updateDepartmentForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.put(`/departments/${values.kode}`, values)
      .then((response) => {
        // console.dir(response);
        Message.success('Department updated successfully.');
        form.resetFields();
        this.setState({
          updateDepartmentFormVisible: false,
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
    return (
      <div className="department">
        <div className="section-header">
          <div className="left">
            <ul>
              <li className="the-li">
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Kode atau Nama"
                  onChange={this.onSearchTextChange}
                />
              </li>
              <li className="the-li">
                <StudentLevelRadio
                  value={this.state.studentLevel}
                  onChange={this.onStudentLevelSelect}
                />
              </li>
              <li className="the-li">
                <Button
                  shape="circle"
                  icon="search"
                  className="search-button"
                  onClick={this.onSearch}
                />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Button
                  type="primary"
                  icon="plus"
                  className="add-button"
                  onClick={this.onOpenCreateDepartmentForm}
                >
                  Bagian
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-content">
          <Table
            size="middle"
            pagination={false}
            loading={this.state.loading}
            rowKey="id"
            columns={this.state.columns}
            dataSource={this.state.departments}
          />
        </div>
        <DepartmentCreateForm
          ref={this.saveCreateDepartmentFormRef}
          visible={this.state.createDepartmentFormVisible}
          onCancel={this.handleCancelCreate}
          onCreate={this.handleCreateDepartment}
        />
        <DepartmentUpdateForm
          ref={this.saveUpdateDepartmentFormRef}
          visible={this.state.updateDepartmentFormVisible}
          onClose={this.handleCloseUpdate}
          onUpdate={this.handleUpdateDepartment}
          department={this.state.departmentToUpdate}
        />
      </div>
    );
  }
}

DepartmentList.propTypes = {};