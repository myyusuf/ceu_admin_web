import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import TakenDivisionForm from './TakenDivisionForm';
import HospitalScheduleForm from './HospitalScheduleForm';
import DivisionScoreForm from './DivisionScoreForm';
import DivisionProblemForm from './DivisionProblemForm';

const TabPane = Tabs.TabPane;

const WrappedTakenDivisionForm = Form.create()(TakenDivisionForm);
const WrappedHospitalScheduleForm = Form.create()(HospitalScheduleForm);
const WrappedDivisionScoreForm = Form.create()(DivisionScoreForm);

export default class TakenDivisionDetail extends Component {

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
          <WrappedTakenDivisionForm />
        </TabPane>
        <TabPane tab="Jadwal Rumah Sakit" key="2">
          <WrappedHospitalScheduleForm />
        </TabPane>
        <TabPane tab="Data Nilai" key="3">
          <WrappedDivisionScoreForm />
        </TabPane>
        <TabPane tab="Masalah" key="4">
          <DivisionProblemForm />
        </TabPane>
      </Tabs>
    );
  }
}
