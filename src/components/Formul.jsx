import React, { Component } from 'react'
import { Input, Row, Col, Select, Button, f } from 'antd';
import './ful.scss';
import 'antd/dist/antd.css';

export default class ful extends Component {

  handleSubmit(){
    console.log("submit");
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }


  render() {
    const { TextArea } = Input;
    const Option = Select.Option;

    return (
      

      <div className="f-container">
    
     
        
        <Row className="f-section">
          <Col span={3} className="f-row-title">
            <p>Nom :</p>
          </Col>
        </Row>

        <Row>
          <Col span={24} className="f-input">
            <Input type="text" placeholder="test" className="input-one" />
          </Col>
        </Row>
        

        
        <Row className="f-section">
          <Col span={3} className="f-row-title">
            <p>Département :</p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Select defaultValue="Machine" onChange={((value) => this.handleChange(value))} className="f-select">
              <Option className="f-select-opt" value="Choix1">Machine</Option>
              <Option className="f-select-opt" value="Choix2">Choix 2</Option>
              <Option className="f-select-opt" value="Choix3">Choix 3</Option>
              <Option className="f-select-opt" value="Choix4">Choix 4</Option>
            </Select>
          </Col>
        </Row>
        

        
        <Row className="f-section">
          <Col span={3} className="f-row-title">
            <p>Description :</p>
          </Col>
        </Row>

        <Row className="f-input-description">
          <Col span={24}>
            <TextArea rows={5} defaultValue="Description" />
          </Col>
        </Row>
        

        
        <Row className="f-section-table">
          <Row className="grey-row">
            <Col span={12} className="">
              <p className="table-text">Nom du constructeur</p>
            </Col>
            <Col span={11} className="table-grey">
              <Input type="text" placeholder="Nom du constructeur" className="table-input" />
            </Col>
          </Row>
          <Row className="white-row">
            <Col span={12} className="table-white">
              <p className="table-text">Référence du constructeur</p>
            </Col>
            <Col span={11} className="table-white">
              <Input type="text" placeholder="Référence du constructeur" className="table-input" />
            </Col>
          </Row>
          <Row className="grey-row">
            <Col span={12} className="table-grey">
              <p className="table-text">Numéro de série</p>
            </Col>
            <Col span={11} className="table-grey">
              <Input type="text" placeholder="Référence du constructeur" className="table-input" />
            </Col>
          </Row>
        </Row>
        

        
        <Row className="f-section-remarques">
          <Col span={3} className="f-row-title">
            <p>Remarques:</p>
          </Col>
        </Row>
        

        
        <Row>
          <Col span={24}>
            <TextArea rows={2} />
          </Col>
        </Row>
        

        
        <Row type="flex" justify="end" className="f-section-button">
          <Button style={{ borderRadius: 0 }} className="primary" htmlType="submit" >Enregistrer</Button>
          <Button style={{ marginLeft: 15, borderRadius: 0 }}>Annuler</Button>
        </Row>
        
      </div>
     

    );
  }
}