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
    // console.log('this.props.takenDepartment : ', this.props.takenDepartment);
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Detail" key="1">
          <WrappedTakenDepartmentForm
            takenDepartment={this.props.takenDepartment}
          />
        </TabPane>
        <TabPane tab="Jadwal Rumah Sakit" key="2">
          <div className="tab-container">
            <WrappedHospitalScheduleForm
              takenDepartment={this.props.takenDepartment}
            />
          </div>
        </TabPane>
        <TabPane tab="Data Nilai" key="3">
          <div className="tab-container">
            <WrappedDepartmentScoreForm />
          </div>
        </TabPane>
        <TabPane tab="Masalah" key="4">
          <div className="tab-container">
            <DepartmentProblemForm />
          </div>
        </TabPane>
        <TabPane tab="Surat Keterangan" key="5">
          <div className="tab-container">
            <DepartmentLetterForm />
          </div>
        </TabPane>
      </Tabs>
    );
  }
}
