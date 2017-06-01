import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import axios from 'axios';
import Form from 'antd/lib/form';
import Modal from 'antd/lib/modal';
import Message from 'antd/lib/message';
import HospitalCreateForm from './HospitalCreateForm';
import HospitalUpdateForm from './HospitalUpdateForm';

const confirm = Modal.confirm;

const WrappedHospitalCreateForm = Form.create()(HospitalCreateForm);
const WrappedHospitalUpdateForm = Form.create()(HospitalUpdateForm);

export default class HospitalList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createHospitalFormVisible: false,
      updateHospitalFormVisible: false,
      hospitalToUpdate: {},
      hospitalToDelete: {},
      columns: [
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
          // width: 300,
        }, {
          title: 'Action',
          key: 'action',
          // fixed: 'right',
          width: 100,
          render: (text, record) => {
            return (
              <span>
                <Button
                  icon="edit"
                  type="dashed"
                  style={{ marginRight: 5 }}
                  onClick={() => { this.onOpenUpdateHospitalForm(record); }}
                />
                <Button
                  ghost
                  icon="delete"
                  type="danger"
                  onClick={() => { this.onOpenDeleteHospitalDialog(record); }}
                />
              </span>
            );
          },
        },
      ],
      hospitals: [],
    };

    this.saveCreateHospitalFormRef = this.saveCreateHospitalFormRef.bind(this);
    this.onOpenCreateHospitalForm = this.onOpenCreateHospitalForm.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.handleCreateHospital = this.handleCreateHospital.bind(this);

    this.saveUpdateHospitalFormRef = this.saveUpdateHospitalFormRef.bind(this);
    this.onOpenUpdateHospitalForm = this.onOpenUpdateHospitalForm.bind(this);
    this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
    this.handleUpdateHospital = this.handleUpdateHospital.bind(this);

    this.onOpenDeleteHospitalDialog = this.onOpenDeleteHospitalDialog.bind(this);
  }

  componentDidMount() {
    this.getHospitals();
  }

  onOpenCreateHospitalForm() {
    this.setState({ createHospitalFormVisible: true });
  }

  onOpenUpdateHospitalForm(record) {
    console.dir(record);
    this.setState({
      hospitalToUpdate: record,
      updateHospitalFormVisible: true,
    });
  }

  onOpenDeleteHospitalDialog(record) {
    const hospitalList = this;
    confirm({
      title: `Anda akan menghapus rumah sakit : ${record.nama}`,
      content: 'Tindakan ini tidak dapat dibatalkan.',
      onOk() {
        hospitalList.handleDeleteHospital(record);
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  handleCancelCreate() {
    const form = this.createHospitalForm;
    form.resetFields();
    this.setState({ createHospitalFormVisible: false });
  }

  saveCreateHospitalFormRef(form) {
    this.createHospitalForm = form;
  }

  handleCloseUpdate() {
    const form = this.updateHospitalForm;
    form.resetFields();
    this.setState({ updateHospitalFormVisible: false });
  }

  saveUpdateHospitalFormRef(form) {
    this.updateHospitalForm = form;
  }

  getHospitals(searchText = '', hospitalTypes = ['1']) {
    this.setState({ loading: true }, () => {
      axios.get('/hospitals', {
        params: {
          searchText,
          hospitalTypes,
        },
      })
      .then((response) => {
        this.setState({
          hospitals: response.data,
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

  search(searchText, hospitalTypes) {
    this.getHospitals(searchText, hospitalTypes);
  }

  handleCreateHospital() {
    const form = this.createHospitalForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.post('/hospitals', values)
      .then((response) => {
        // console.dir(response);
        Message.success('Hospital created successfully.');
        form.resetFields();
        this.setState({
          createHospitalFormVisible: false,
        }, () => {
          this.getHospitals();
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

  handleUpdateHospital() {
    const form = this.updateHospitalForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      axios.put(`/hospitals/${values.kode}`, values)
      .then((response) => {
        // console.dir(response);
        Message.success('Hospital updated successfully.');
        form.resetFields();
        this.setState({
          updateHospitalFormVisible: false,
        }, () => {
          this.getHospitals();
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

  handleDeleteHospital(hospitalToDelete) {
    axios.delete(`/hospitals/${hospitalToDelete.kode}`, {})
    .then((response) => {
      // console.dir(response);
      Message.success('Hospital deleted successfully.');
      this.setState({
        hospitalToDelete: {},
      }, () => {
        this.getHospitals();
      });
    })
    .catch((error) => {
      Message.error(
        <span>
          {error.message}<br />
          {error.response ? error.response.data : ''}
        </span>);
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
        this.onTakenHospitalSelected(record);
      },
    };

    return (
      <div>
        <Table
          size="medium"
          pagination={false}
          rowKey="kode"
          rowSelection={rowSelection}
          columns={this.state.columns}
          dataSource={this.state.hospitals}
          scroll={{ y: 400 }}
        />
        <WrappedHospitalCreateForm
          ref={this.saveCreateHospitalFormRef}
          visible={this.state.createHospitalFormVisible}
          onCancel={this.handleCancelCreate}
          onCreate={this.handleCreateHospital}
        />
        <WrappedHospitalUpdateForm
          ref={this.saveUpdateHospitalFormRef}
          visible={this.state.updateHospitalFormVisible}
          onClose={this.handleCloseUpdate}
          onUpdate={this.handleUpdateHospital}
          hospital={this.state.hospitalToUpdate}
        />
      </div>
    );
  }
}
