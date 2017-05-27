import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Message from 'antd/lib/message';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import axios from 'axios';

const Option = Select.Option;
const OptGroup = Select.OptGroup;
const FormItem = Form.Item;

export default class AddTakenDepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      departments: [],
    };
  }

  componentDidMount() {
    this.getDepartments();
  }

  onColorChange(color) {
    this.props.form.setFieldsValue({
      warna: color.hex.toUpperCase(),
    });
  }

  getDepartments() {
    this.setState({ loading: true }, () => {
      axios.get('/departments_all', {
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

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    const level1Departments = this.state.departments.filter((department) => {
      return department.tingkat === 1;
    });
    const level1Options = level1Departments.map((department) => {
      return <Option key={department.kode}>{department.nama}</Option>;
    });

    const level2Departments = this.state.departments.filter((department) => {
      return department.tingkat === 2;
    });
    const level2Options = level2Departments.map((department) => {
      return <Option key={department.kode}>{department.nama}</Option>;
    });

    return (
      <Modal
        visible={visible}
        wrapClassName="vertical-center-modal"
        width={450}
        title="Tambah Bagian"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Row gutter={15}>
            <Col span={10}>
              <FormItem label="Bagian">
                {getFieldDecorator('bagian', {
                  rules: [
                    {
                      required: true,
                      message: 'Bagian wajib diisi',
                    },
                  ],
                })(
                  <Select
                    mode="single"
                    placeholder="Pilih bagian"
                    style={{ width: '100%' }}
                  >
                    <OptGroup label="Tingkat 1">
                      {level1Options}
                    </OptGroup>
                    <OptGroup label="Tingkat 2">
                      {level2Options}
                    </OptGroup>
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col span={14}>
              <FormItem label="Nama">
                {getFieldDecorator('nama', {
                  rules: [
                    {
                      required: true,
                      message: 'Nama bagian wajib diisi',
                    },
                    {
                      min: 3,
                      message: 'Panjang nama bagian minimum 3 karakter',
                    },
                    {
                      max: 30,
                      message: 'Panjang nama bagian maximum 30 karakter',
                    },
                  ],
                })(
                  <Input maxLength="30" />,
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
