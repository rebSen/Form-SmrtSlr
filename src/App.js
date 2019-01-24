import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import 'antd/lib/date-picker/style/css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Input placeholder="Basic usage" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
