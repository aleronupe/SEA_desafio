// ## Step 1 ## : Import the necessary libraries 

import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import "./default.css";
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
const { Text } = Typography;


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
            
            <Sider style={{background: '#E5E5E5', width: '57px'}}>
                <Row 
                 style={{height: '100%'}}
                 align='middle'>
                    <div>
                        <Menu 
                            theme="dark" 
                            defaultSelectedKeys={['2']} 
                            mode="vertical"
                            align="middle"
                            style={{background: '#4FA1C1'}}
                            >
                            
                            <Menu.Item key="1">
                                <Icon style={{ fontSize: '22px'}} type="database" theme="filled" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon style={{ fontSize: '22px'}} type="form" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon style={{ fontSize: '22px'}} type="apartment" />
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon style={{ fontSize: '22px'}} type="bell" />
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon style={{ fontSize: '22px'}} type="undo" />
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon style={{ fontSize: '22px'}} type="user" />
                            </Menu.Item>
                        </Menu>
                    </div>
                </Row>
            </Sider>
            
            <Layout >
                <Header style={{ background: '#E5E5E5', height: '225px', padding: 0 }}>
                    <Card style={{ width: '1242px', height: '159px', left: '34px', top: '33px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '122.2%', color: '#707070'}}>
                        
                    </Card>
                </Header>

                <Content style={{ background: '#E5E5E5' }}>
                    <Row type="flex" justify="start">
                        
                        <Col span={7}>
                            <Card style={{ width: '447px', height: '484px', left: '34px', background: '#FFFFFF', boxShadow: '0px 2px 23px rgba(0, 0, 0, 0.05)', borderRadius: '20px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '122.2%', color: '#707070'}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.</p>
                            </Card>
                        </Col>

                        <Col span={4}>
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
                        </Col>
                    </Row>
                </Content>

                <Footer style={{ textAlign: 'center', background: '#E5E5E5' }}>Created by Alexandre Miguel</Footer>
            </Layout>
        </Layout>
      );
    }
  }

// ## Step 3 ## : Render the components at the html page used

ReactDOM.render(<App />, document.getElementById('root'));