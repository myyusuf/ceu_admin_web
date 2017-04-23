import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import axios from 'axios';
import Form from 'antd/lib/form';
import TakenDivisionForm from './TakenDivisionForm';
import HospitalScheduleForm from './HospitalScheduleForm';

const TabPane = Tabs.TabPane;

const WrappedTakenDivisionForm = Form.create()(TakenDivisionForm);
const WrappedHospitalScheduleForm = Form.create()(HospitalScheduleForm);

export default class TakenDivisionDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  showDetails(student) {
    if (this.props.onShowDetails) {
      this.onShowDetails(student);
    }
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
        <TabPane tab="Masalah" key="3">Masalah Bagian</TabPane>
      </Tabs>
    );
  }
}
