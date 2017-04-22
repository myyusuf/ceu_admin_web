
import React from 'react';
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const DashboardChartInfo = () => {
  return (
    <Card className="dashboard-simple-info">
      <Row>
        <Col span={12}>
          <Row>
            <span className="description">350</span>
          </Row>
          <Row>
            <span className="title">Lulus Ujian</span>
          </Row>
        </Col>
        <Col span={12}>
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={40} margin={5}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardChartInfo;
