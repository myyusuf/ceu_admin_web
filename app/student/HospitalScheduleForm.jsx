import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import axios from 'axios';
import DatePicker from 'antd/lib/date-picker';
import Tabs from 'antd/lib/tabs';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import moment from 'moment';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class TakenDivisionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    // this.props.form.setFieldsValue({
    //   bagian: 'valuePropName',
    // });
  }

  handlePick() {
    // this.props.form.setFieldsValue({
    //   bagian: 'value',
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const hospitalPlanRangeDate1 = fieldsValue.hospitalPlanRangeDate1;
        const values = {
          hospitalPlanRangeDate1: [hospitalPlanRangeDate1[0].format('YYYY-MM-DD'), hospitalPlanRangeDate1[1].format('YYYY-MM-DD')],
        };
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { takenDepartment, form } = this.props;
    const { getFieldDecorator } = form;

    let hospital1PlanStartDate = null;
    let hospital1PlanEndDate = null;
    if (takenDepartment.hospital1_plan_start_date) {
      hospital1PlanStartDate = moment(new Date(takenDepartment.hospital1_plan_start_date));
    }
    if (takenDepartment.hospital1_plan_end_date) {
      hospital1PlanEndDate = moment(new Date(takenDepartment.hospital1_plan_end_date));
    }

    let hospital2PlanStartDate = null;
    let hospital2PlanEndDate = null;
    if (takenDepartment.hospital2_plan_start_date) {
      hospital2PlanStartDate = moment(new Date(takenDepartment.hospital2_plan_start_date));
    }
    if (takenDepartment.hospital2_plan_end_date) {
      hospital2PlanEndDate = moment(new Date(takenDepartment.hospital2_plan_end_date));
    }

    let clinicPlanStartDate = null;
    let clinicPlanEndDate = null;
    if (takenDepartment.clinic_plan_start_date) {
      clinicPlanStartDate = moment(new Date(takenDepartment.clinic_plan_start_date));
    }
    if (takenDepartment.clinic_plan_end_date) {
      clinicPlanEndDate = moment(new Date(takenDepartment.clinic_plan_end_date));
    }

    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Jadwal RS 1" key="1">
            <Row gutter={15}>
              <Col span={12}>
                <FormItem
                  label={(
                    <span>
                      Rumah Sakit&nbsp;
                      <Tooltip title="Isi rumah sakit dengan memilih.">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                >
                  {getFieldDecorator('kode_rs', {
                    // initialValue: takenDepartment.kode_rs,
                    rules: [],
                  })(
                    <Input maxLength="10" disabled />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <Button
                  type="dashed"
                  icon="search"
                  size="large"
                  style={{ marginTop: 31, borderColor: '#33CC33', color: '#33CC33' }}
                >
                Pilih
                </Button>
              </Col>
            </Row>
            <FormItem label="Tanggal Rencana">
              {getFieldDecorator('tanggal_rencana_rs1', {
                initialValue: [hospital1PlanStartDate, hospital1PlanEndDate],
                rules: [],
              })(
                <RangePicker style={{ width: '48%' }} />
              )}
            </FormItem>
            <Row gutter={15}>
              <Col span={6}>
                <FormItem label="Tanggal Mulai">
                  {getFieldDecorator('tanggal_mulai_rs1', {
                    // initialValue: takenDepartment.tanggal_mulai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Tanggal Selesai">
                  {getFieldDecorator('tanggal_selesai_rs1', {
                    // initialValue: takenDepartment.tanggal_selesai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Jadwal RS 2" key="2">
            <FormItem label="Tanggal Rencana">
              {getFieldDecorator('tanggal_rencana_rs2', {
                initialValue: [hospital2PlanStartDate, hospital2PlanEndDate],
                rules: [],
              })(
                <RangePicker style={{ width: '48%' }} />
              )}
            </FormItem>
            <Row gutter={15}>
              <Col span={6}>
                <FormItem label="Tanggal Mulai">
                  {getFieldDecorator('tanggal_mulai_rs2', {
                    // initialValue: takenDepartment.tanggal_mulai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Tanggal Selesai">
                  {getFieldDecorator('tanggal_selesai_rs2', {
                    // initialValue: takenDepartment.tanggal_selesai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Jadwal Puskesmas" key="3">
            <Row gutter={15}>
              <Col span={12}>
                <FormItem
                  label={(
                    <span>
                      Puskesmas&nbsp;
                      <Tooltip title="Isi puskesmas dengan memilih.">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                >
                  {getFieldDecorator('kode_puskesmas', {
                    // initialValue: takenDepartment.kode_rs,
                    rules: [],
                  })(
                    <Input maxLength="10" disabled />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <Button
                  type="dashed"
                  icon="search"
                  size="large"
                  style={{ marginTop: 31, borderColor: '#33CC33', color: '#33CC33' }}
                >
                Pilih
                </Button>
              </Col>
            </Row>
            <FormItem label="Tanggal Rencana">
              {getFieldDecorator('tanggal_rencana_puskesmas', {
                initialValue: [clinicPlanStartDate, clinicPlanEndDate],
                rules: [],
              })(
                <RangePicker style={{ width: '48%' }} />
              )}
            </FormItem>
            <Row gutter={15}>
              <Col span={6}>
                <FormItem label="Tanggal Mulai">
                  {getFieldDecorator('tanggal_mulai_puskesmas', {
                    // initialValue: takenDepartment.tanggal_mulai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Tanggal Selesai">
                  {getFieldDecorator('tanggal_selesai_puskesmas', {
                    // initialValue: takenDepartment.tanggal_selesai,
                    rules: [],
                  })(
                    <DatePicker />,
                  )}
                </FormItem>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ marginTop: 10 }}
          >
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}
