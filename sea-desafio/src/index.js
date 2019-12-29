// ## Step 1 ## : Import the necessary libraries 

import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import "./default.css";
import BellIcon from './icons/bell-icon.js'
import BuildingFilledIcon from './icons/building-filled-icon.js'
import BuildingIcon from './icons/building-icon.js'
import ConnectionsIcon from './icons/connections-icon.js'
import EditIcon from './icons/edit-icon.js'
import UndoClockIcon from './icons/undo-clock-icon.js'
import UserFilledIcon from './icons/user-filled-icon.js'
import Silhouette1 from './icons/silhouette-1.js'
import Silhouette2 from './icons/silhouette-2.js'
import Silhouette3 from './icons/silhouette-3.js'
import 'typeface-roboto'


import { 
    Layout, 
    Menu, 
    Icon, 
    Card,
    Button, 
    Typography,
    Switch,
    Input,
    Radio,
    Cascader,
    Checkbox,
    Tooltip,
    Col, 
    Row } from 'antd';


// ## Step 2 ## : Create the component to be used

const { Header, Content, Footer, Sider } = Layout;
const { Text, Title } = Typography;


class App extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
            
            <Sider
             width='65px' 
             style={{background: '#E5E5E5'}}>
                <Row 
                 style={{height: '100%'}}
                 align='middle'>
                    <div style={{maxHeight: '768px', height: '100%', background: '#4FA1C1', borderRadius: '0px 20px 20px 0px', textAlign: 'center'}}>

                        <div style={{display: 'inline-block', width: '65px', height: '41px', background: '#FFFFFF', marginTop: '50px'}}>
                        </div>

                        <Menu 
                            theme="dark" 
                            defaultSelectedKeys={['2']} 
                            mode="vertical"
                            align="middle"
                            style={{height: '350px', width: '65px', background: '#4FA1C1', marginTop: '134px', display: 'inline-block'}}
                            >
                            
                            <Menu.Item key="1"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{display: 'inline-block', margin: 'auto auto', fontSize: '22px'}} component={BuildingIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>

                            <Menu.Item key="2"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{margin: 'auto auto', fontSize: '22px'}} component={EditIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>

                            <Menu.Item key="3"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{margin: 'auto auto', fontSize: '22px'}} component={ConnectionsIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>


                            <Menu.Item key="4"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{margin: 'auto auto', fontSize: '22px'}} component={BellIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>

                            <Menu.Item key="5"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{margin: 'auto auto', fontSize: '22px'}} component={UndoClockIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>

                            <Menu.Item key="6"
                             style={{display: 'inline-block', paddingLeft: '5px', paddingRight: '0px', alignItems: 'center', height: '36px', marginTop: '12px', marginBottom: '12px'}}>
                                <div style={{height: '100%', width: '55px', backgroundColor: '#4FA1C1'}}>
                                    <div style={{display: 'inline-block', float: 'left', marginLeft: '9px', marginTop: '2px', marginBottom: 'auto', height: '32px', width: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                                        <Icon style={{margin: 'auto auto', fontSize: '22px'}} component={UserFilledIcon}  />
                                    </div>
                                </div>
                            </Menu.Item>

                        </Menu>
                    </div>
                </Row>
            </Sider>
            
            <Layout >
                <Header style={{ background: '#E5E5E5', height: '225px', padding: 0 }}>
                    <Card 
                     style={{ width: '1242px', height: '160px', left: '34px', top: '33px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '122.2%', color: '#707070'}}
                     bodyStyle={{paddingTop: '25px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', height: '160px'}}>  
                        <Row>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                            <Col span={1}>
                                <div style={{display: 'inline-block', width: '70px', height:'80px', textAlign: 'center'}}>
                                    <div style={{marginTop: '35px', marginRight: '20px'}} className='line'></div>
                                </div>
                            </Col>
                            <Col span={2}>
                                <div style={{width: '90px', textAlign: 'center'}}>
                                    <div style={{display: 'inline-block', textAlign: 'center', margin: 'auto', height: '70px', width: '70px', boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#4FA1C1', borderRadius: '20px'}}>
                                        <Icon style={{display: 'inline-block', marginTop: '15px', fontSize: '40px'}} component={BuildingFilledIcon}  />
                                    </div>
                                    <br />
                                    <Title
                                    style={{marginTop: '16px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>ITEM 1</Title>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Header>

                <Content style={{ background: '#E5E5E5' }}>
                    <div style={{width: '1300px'}}>
                        <Row type="flex" justify="start">
                            
                            <Col span={9}>
                                <Card style={{ width: '447px', height: '484px', left: '34px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '14px', color: '#707070'}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.</p>
                                
                                    <Icon style={{marginTop:'150px', fontSize: '190px'}} component={Silhouette1}  />

                                </Card>
                            </Col>

                            <Col span={15}>
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
                            </Col>
                        </Row>
                    </div>
                </Content>

                <Footer style={{extAlign: 'center', background: '#E5E5E5' }}>
                    <div style={{float: 'left', width: '100%', maxWidth: '1309px', textAlign: 'center' }}>
                        Created by Alexandre Miguel
                    </div>
                    </Footer>
            </Layout>
        </Layout>
      );
    }
  }

// ## Step 3 ## : Render the components at the html page used

ReactDOM.render(<App />, document.getElementById('root'));