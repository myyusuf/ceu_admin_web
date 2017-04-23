import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import axios from 'axios';
import Form from 'antd/lib/form';
import TakenDivisionForm from './TakenDivisionForm';
import HospitalScheduleForm from './HospitalScheduleForm';
import DivisionScoreForm from './DivisionScoreForm';

const TabPane = Tabs.TabPane;

const WrappedTakenDivisionForm = Form.create()(TakenDivisionForm);
const WrappedHospitalScheduleForm = Form.create()(HospitalScheduleForm);
const WrappedDivisionScoreFormForm = Form.create()(DivisionScoreForm);

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
          <WrappedDivisionScoreFormForm />
        </TabPane>
      </Tabs>
    );
  }
}
