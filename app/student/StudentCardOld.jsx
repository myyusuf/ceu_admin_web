import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';

export default class StudentCard extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Hello',
      status: 'Active'
    }
  }
  render() {

    var statusTag = <Tag color="#2db7f5">{this.state.status}</Tag>;
    return (
      <Card style={{ width: 300 }}>
        <table style={{ width: 300 }}>
          <tbody>
            <tr>
              <td style={{ width: 150 }}>
                <img src="assets/images/avatar.png"></img>
              </td>
              <td style={{ width: 150 }}>

              </td>
            </tr>
          <tr>
            <td style={{ width: 150 }}>
              <label style={{ fontSize: 20 }}>Status x</label>
            </td>
            <td style={{ width: 150 }}>
              <Tag color="#2db7f5">{this.state.status}</Tag>
            </td>
          </tr>
          </tbody>
        </table>
      </Card>
    );
  }
}
