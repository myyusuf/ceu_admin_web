import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import TakenDepartmentForm from './TakenDepartmentForm';
import HospitalScheduleForm from './HospitalScheduleForm';
import DepartmentScoreForm from './DepartmentScoreForm';
import DepartmentProblemForm from './DepartmentProblemForm';
import DepartmentLetterForm from './DepartmentLetterForm';

const TabPane = Tabs.TabPane;

const WrappedTakenDepartmentForm = Form.create()(TakenDepartmentForm);
const WrappedHospitalScheduleForm = Form.create()(HospitalScheduleForm);
const WrappedDepartmentScoreForm = Form.create()(DepartmentScoreForm);

export default class TakenDepartmentDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    // this.getStudents();
  }

  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Detail" key="1">
          <WrappedTakenDepartmentForm />
        </TabPane>
        <TabPane tab="Jadwal Rumah Sakit" key="2">
          <WrappedHospitalScheduleForm />
        </TabPane>
        <TabPane tab="Data Nilai" key="3">
          <WrappedDepartmentScoreForm />
        </TabPane>
        <TabPane tab="Masalah" key="4">
          <DepartmentProblemForm />
        </TabPane>
        <TabPane tab="Surat Keterangan" key="5">
          <DepartmentLetterForm />
        </TabPane>
      </Tabs>
    );
  }
}