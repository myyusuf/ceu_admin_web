import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import PreKompre from './PreKompre';

const TabPane = Tabs.TabPane;

export default class Mppd extends Component {

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
        <TabPane tab="Pre Kompre" key="1">
          <PreKompre />
        </TabPane>
        <TabPane tab="Mid Kompre" key="2">
          <div className="tab-container">
          </div>
        </TabPane>
        <TabPane tab="Final Kompre" key="3">
          <div className="tab-container">
          </div>
        </TabPane>
        <TabPane tab="Try Out" key="4">
          <div className="tab-container">
          </div>
        </TabPane>
        <TabPane tab="MPPD" key="5">
          <div className="tab-container">
          </div>
        </TabPane>
      </Tabs>
    );
  }
}
