import React, { Component } from 'react';
import { Input, Row, Col, Select, Button, List  } from 'antd';
import './FormLess.less';
import 'antd/dist/antd.css'; 


class FormLess extends Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }
  


  render() {
    const { TextArea } = Input;
    const Option = Select.Option;

    return (


      <div className="app-container">

        
          <Row>
            <Col span={12} className="app-row-title">
              <p>Nom</p>
            </Col>
          </Row>
         
          <Row>
            <Col span={24} className="app-input">
              <Input type="text" placeholder="test" className="input-one" />
            </Col>
          </Row>
        
       
          <Row className="app-section">
            <Col span={12} className="app-row-title">
              <p>Département</p>
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
         
          <Row>
            <Col span={24}>
            <TextArea rows={4} />
            </Col>
          </Row>
      
          <Row className="app-section">
            <Col span={12} className="app-row-title">
              <p>TABLEAU :</p>
            </Col>
          </Row>
         
          <Row>
            <Col span={24}>
            <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            //dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
         
      

            </Col>
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

export default FormLess;
