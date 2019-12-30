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
import AddWorker from './add-worker.js'
import ListWorkers from './list-workers.js'
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
      cardType: 'listWorkers'
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    getCard = cardType => {
        const card = {
            addWorker: <AddWorker/>,
            listWorkers: <ListWorkers/>
        };

        return card[cardType];
    };

    nextStep = () => {
        this.setState({cardType: 'addWorker'})
    }
  


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
                                    <Title
                                    style={{marginTop: '4px', fontFamily: 'Ubuntu', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '16px', color: '#4FA1C1'}} 
                                    level={4}>CONCLUIDO</Title>
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

                                {this.getCard(this.state.cardType)}
                            
                                <Button 
                                    style={{float: 'right', marginRight: '20px', marginTop: '13px', width: '194px', height: '32px', borderRadius: '10px', background: '#4FA1C', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '16px', color: '#FFFFFF'}}
                                    type="primary"
                                    onClick={this.nextStep}>Próximo passo</Button>
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