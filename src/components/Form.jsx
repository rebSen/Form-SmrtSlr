import React, { Component } from 'react'
import { Input, Row, Col, Select, Button, List } from 'antd';
import './Form.scss';
import 'antd/dist/antd.css';

export default class Form extends Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }


  render() {
    const { TextArea } = Input;
    const Option = Select.Option;

    return (


      <div className="app-container">

        <Row className="app-section">
          <Col span={12} className="app-row-title">
            <p>Nom :</p>
          </Col>
        </Row>

        <Row>
          <Col span={24} className="app-input">
            <Input type="text" placeholder="test" className="input-one" />
          </Col>
        </Row>

        <Row className="app-section">
          <Col span={12} className="app-row-title">
            <p>Département :</p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Select defaultValue="Machine" onChange={((value) => this.handleChange(value))} className="app-select">
              <Option className="app-select-opt" value="Choix2">Choix 2</Option>
              <Option className="app-select-opt" value="Choix3">Choix 3</Option>
              <Option className="app-select-opt" value="Choix4">Choix 4</Option>
            </Select>
          </Col>
        </Row>

        <Row className="app-section">
          <Col span={12} className="app-row-title">
            <p>Description</p>
          </Col>
        </Row>

        <Row className="app-input-description">
          <Col span={24}>
            <TextArea rows={4} defaultValue="Description" />
          </Col>
        </Row>

        <Row className="app-section-table">

          <Row className="grey-row">
            <Col span={12} className="">
              <p>Nom du constructeur</p>
            </Col>
            <Col span={12} className="table-grey">
              <Input type="text" placeholder="Nom du constructeur" className="" />
            </Col>
          </Row>

          <Row className="white-row">
            <Col span={12} className="table-white">
            <p>Référence du constructeur</p>
            </Col>
            <Col span={12} className="table-white">
              <Input type="text" placeholder="Référence du constructeur" className="" />
            </Col>
          </Row>

          <Row className="grey-row">
            <Col span={12} className="table-grey">
            <p>Numéro de série</p>
            </Col>
            <Col span={12} className="table-grey">
              <Input type="text" placeholder="Référence du constructeur" className="" />
            </Col>

          </Row>
        </Row>

        <Row className="app-section">
          <Col span={12} className="app-row-title">
            <p>Remarques:</p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <TextArea rows={2} />
          </Col>
        </Row>


        <Row type="flex" justify="end" className="app-section">
          <Button type="primary">Enregistrer</Button>
          <Button>Annuler</Button>
        </Row>


      </div>


    );
  }
}