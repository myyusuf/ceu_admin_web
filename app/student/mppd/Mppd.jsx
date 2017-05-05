import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import PreKompre from './PreKompre';
import MidKompre from './MidKompre';
import FinalKompre from './FinalKompre';
import TryOut from './TryOut';
import FinalMppd from './FinalMppd';

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
          <MidKompre />
        </TabPane>
        <TabPane tab="Final Kompre" key="3">
          <FinalKompre />
        </TabPane>
        <TabPane tab="Try Out" key="4">
          <TryOut />
        </TabPane>
        <TabPane tab="MPPD" key="5">
          <FinalMppd />
        </TabPane>
      </Tabs>
    );
  }
}
