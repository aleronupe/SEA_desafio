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


import { 
    Layout, 
    Menu, 
    Icon, 
    Card,
    Button, 
    Typography,
    Switch,
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
                    <div style={{height: '100%', background: '#4FA1C1', borderRadius: '0px 20px 20px 0px', textAlign: 'center'}}>

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
                                style={{ float:'left', width: '759px', height: '484px', left: '34px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px'}}
                                headStyle={{background: '#4FA1C1', borderRadius: '20px 20px 0px 0px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '28px', lineHeight: '32px', color: '#FFFFFF'}}
                                bodyStyle={{padding: '55px 9px 2px 16px'}}>
                                    
                                    <Button 
                                    style={{width: '729px', height: '60px', bottom: '20px',border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '18px', color: '#4FA1C1'}} 
                                    size='large'> + Adicionar Funcionário</Button>

                                    <br />
                                    
                                    <Button 
                                    style={{width: '192px', height: '31px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '18px', color: '#4FA1C1'}}
                                    size='large'> Ver apenas ativos </Button>
                                    <Button 
                                    style={{width: '192px', height: '31px', left: '30px', border: '1px solid #4FA1C1', boxSizing: 'border-box', borderRadius: '10px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '18px', color: '#4FA1C1'}}
                                    size='large'> Limpar Filtros </Button>
                                    <Text 
                                    style={{marginTop: '16px', float: 'right' , fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#4F4F4F'}}
                                    >Ativos 2/25</Text>

                                    <br />

                                    <Card 
                                    style={{ width: '734px', height: '84px', top:'20px', background: '#EDF1F5', borderRadius: '10px'}}
                                    bodyStyle={{padding: '0'}}>

                                        <Row>
                                            <Col span={22}>
                                                <h1 style={{ marginLeft: '12px', marginBottom: '8px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '24px', lineHeight: '38px', color: '#707070'}}>Daniel Alves da Silva</h1>
                                                
                                                <Button 
                                                style={{ marginLeft: '12px', width: '130px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">000.000.000-99</Button>

                                                <Button 
                                                style={{ marginLeft: '12px', width: '82px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">Primary</Button>

                                                <Button 
                                                style={{ marginLeft: '12px', width: '82px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">Primary</Button>
                                            </Col>
                                            <Col span={2}>
                                                <Button 
                                                    style={{float: 'right', width: '49px', height: '84px', background: '#4FA1C1', borderRadius: '0px 10px 10px 0px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                    type="primary">
                                                        <Icon type="ellipsis" style={{ fontSize: '22px'}} />
                                                </Button>
                                            </Col>

                                        </Row>

                                    </Card>

                                    <Card 
                                    style={{ width: '734px', height: '84px', marginTop:'36px', background: '#EDF1F5', borderRadius: '10px'}}
                                    bodyStyle={{padding: '0'}}>

                                        <Row>
                                            <Col span={22}>
                                                <h1 style={{ marginLeft: '12px', marginBottom: '8px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '24px', lineHeight: '38px', color: '#707070'}}>Daniel Alves da Silva</h1>
                                                
                                                <Button 
                                                style={{ marginLeft: '12px', width: '130px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">000.000.000-99</Button>

                                                <Button 
                                                style={{ marginLeft: '12px', width: '82px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">Primary</Button>

                                                <Button 
                                                style={{ marginLeft: '12px', width: '82px', height: '24px', background: '#4FA1C1', borderRadius: '36px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                type="primary">Primary</Button>
                                            </Col>
                                            <Col span={2}>
                                                <Button 
                                                    style={{float: 'right', width: '49px', height: '84px', background: '#4FA1C1', borderRadius: '0px 10px 10px 0px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                                    type="primary">
                                                        <Icon type="ellipsis" style={{ fontSize: '22px'}} />
                                                </Button>
                                            </Col>

                                        </Row>

                                    </Card>
                                    
                                    <br />

                                    <Switch 
                                    style={{marginLeft: '20px', float: 'right'}}
                                    checkedChildren="Sim" 
                                    unCheckedChildren="Não" />

                                    <Text
                                    style={{float: 'right' , fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '115%x', color: '#3A3A3A'}}
                                    > A etapa está concluída? </Text>

                                    

                                </Card>

                                <br />

                                <Button 
                                 style={{float: 'right', marginRight: '20px', marginTop: '13px', width: '194px', height: '32px', borderRadius: '10px', background: '#4FA1C', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                 type="primary">Próximo passo</Button>

                            </Col>
                        </Row>
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center', background: '#E5E5E5' }}>Created by Alexandre Miguel</Footer>
            </Layout>
        </Layout>
      );
    }
  }

// ## Step 3 ## : Render the components at the html page used

ReactDOM.render(<App />, document.getElementById('root'));