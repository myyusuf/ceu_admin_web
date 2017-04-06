import React, { Component } from 'react';
import Card from 'antd/lib/card';

export default class StudentCard extends Component {

  constructor(){
    super();
    this.state = {
      title: 'Hello'
    }
  }
  render() {
    return (
      <Card title={this.state.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}
