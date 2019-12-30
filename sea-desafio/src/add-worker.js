// ## Step 1 ## : Import the necessary libraries 

import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import "./default.css";
import 'typeface-roboto'


import {
    Card,
    Button, 
    Typography,
    Switch,
    Input,
    Radio,
    Cascader,
    Checkbox,
    Col, 
    Row } from 'antd';


// ## Step 2 ## : Create the component to be used


const {Title } = Typography;


class AddWorker extends React.Component {

    render() {
        return (
            <Card 
            title="Funcionário(s)" 
            style={{ float:'left', width: '759px', left: '34px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px', textAlign: 'center'}}
            headStyle={{background: '#4FA1C1', borderRadius: '20px 20px 0px 0px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '28px', lineHeight: '32px', color: '#FFFFFF'}}
            bodyStyle={{padding: '15px 15px 26px 15px'}}>
            
                <Card
                    style={{border: '1px solid #4FA1C1', boxSizing: 'border-box', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}
                    bodyStyle={{padding: '10px 13px 10px 13px',}}>

                    <Title
                        style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                        level={4}> O trabalhador está ativo ou inativo?  </Title>

                    <Switch 
                        style={{float: 'right'}}
                        className="altern-switch"
                        checkedChildren="Ativo" 
                        unCheckedChildren="Inativo" />

                </Card>

                <Card
                    style={{marginTop: '27px', border: '1px solid #4FA1C1', boxSizing: 'border-box', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px'}}
                    bodyStyle={{padding: '10px 13px 10px 13px',}}>

                    <Row gutter={25}>
                        <Col span={12}>
                            <Title
                                style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> Nome </Title>

                            <Input style={{float: 'left', width: '338px', height: '36px', marginTop: '8px', background: '#FFFFFF', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}/>

                            <br />

                            <Title
                                style={{float: 'left', marginTop: '14px', marginBottom: '0px',  fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> CPF </Title>

                            <Input style={{float: 'left', width: '338px', height: '36px', marginTop: '8px', background: '#FFFFFF', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}/>

                            <br />

                            <Title
                                style={{float: 'left', marginTop: '14px', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> RG </Title>

                            <Input style={{float: 'left', width: '338px', height: '36px', marginTop: '8px', background: '#FFFFFF', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}/>
                        
                        </Col>
                        <Col span={12}>
                            <Title
                                style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> Sexo </Title>

                            <br />

                            <Radio.Group 
                                style={{marginTop: '16px', float: 'left', }}>
                                <Radio
                                    style={{fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                    value={1}> Masculino </Radio>
                                <Radio 
                                    style={{marginLeft: '13px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}}
                                    value={2}> Feminino </Radio>
                            </Radio.Group>

                            <br />

                            <Title
                                style={{float: 'left', marginTop: '17px', marginBottom: '0px',  fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> Data de Nascimento </Title>

                            <Input style={{float: 'left', width: '338px', height: '36px', marginTop: '8px', background: '#FFFFFF', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}/>

                            <br />

                            <Title
                                style={{float: 'left', marginTop: '15px', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                level={4}> Cargo </Title>
                        
                        
                            <Cascader 
                                style={{float: 'left', width: '338px', height: '36px', marginTop: '8px', background: '#FFFFFF'}}
                                placeholder="" />
                            
                        
                        </Col>
                    </Row>


                </Card>

                <Card
                    style={{marginTop: '26px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}
                    bodyStyle={{padding: '10px 13px 10px 13px',}}>

                    <Title
                        style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                        level={4}> Quais EPIs o trabalhador usa na atividade? </Title>

                    <br />

                    <Checkbox
                        style={{float: 'left', marginTop: '13px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                        > O trabalhador não usa EPI. </Checkbox>

                    <br />

                    <Card
                        style={{marginTop: '26px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}
                        bodyStyle={{padding: '10px 12px 12px 12px',}}>

                        <Title
                            style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                            level={4}> Selecione a atividade: </Title>

                        <br />

                        <Cascader 
                            style={{float: 'left', width: '676px', height: '36px', marginTop: '8px', background: '#FFFFFF', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}}
                            placeholder="Ativid. 1" />

                        <br />

                        <Row 
                            style={{ display: 'inline-block', marginTop: '12px', width: '100%'}}>

                            <Col span={10}>
                                <Title
                                    style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                    level={4}> Selecione o EPI: </Title>

                                <br />

                                <Cascader 
                                    style={{float: 'left', width: '260px', height: '36px', marginTop: '8px', background: '#FFFFFF', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}}
                                    placeholder="Calçado de segurança" />

                            </Col>

                            <Col span={10}>
                                <Title
                                    style={{float: 'left', marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                    level={4}> Informe o número do CA: </Title>

                                <br />

                                <Input style={{float: 'left', width: '260px', height: '36px', marginTop: '8px', background: '#FFFFFF', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}
                                    placeholder="9356"/>
                            </Col>
                            
                            <Col span={4}>
                                <Title
                                    style={{display: 'inline-block', marginTop: '35px' , marginBottom: '0px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                                    level={4}> Adicionar EPI </Title>
                            </Col>
                        </Row>



                    </Card>

                    <Button 
                    style={{width: '700px', height: '36px', marginTop: '12px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#4F4F4F'}} 
                    size='large'> Adicionar outra atividade  </Button>

                </Card>

                <Card
                    style={{marginTop: '20px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px'}}
                    bodyStyle={{padding: '10px 13px 10px 13px',}}>

                    <Title
                        style={{float: 'left', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '19px', color: '#3A3A3A'}} 
                        level={4}> Adicione Atestado de Saúde Ocupacional (opcional): </Title>

                    <Button 
                        style={{textAlign: 'left', width: '700px', height: '36px', marginTop: '12px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#4F4F4F'}} 
                        disabled='true'
                        size='large'> Documento 1.png </Button>

                    <Button 
                        style={{width: '700px', height: '36px', marginTop: '12px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#4F4F4F'}} 
                        size='large'> Selecionar arquivo </Button>

                </Card>

                <Button 
                    style={{width: '723px', height: '36px', marginTop: '12px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#4F4F4F'}} 
                    size='large'> Salvar </Button>
                
            </Card>
        );
    }
}

// ## Step 3 ## : Render the components at the html page used

export default AddWorker