import React, { Component } from 'react';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button  } from 'antd';
import SideNav from "./SideNav";
import moment from 'moment';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:"",
            email:"",
            date:new Date()
        }
    }
    componentDidMount(){
        this.getProfile();
    }
    getProfile() {
        this.setState({ loading: true }, () => {
          fetch("http://localhost:8000/Profile/")
            .then(res => res.json())
            .then(result =>
             
              this.setState({
              displayName:result.displayName,
              email:result.email
              },()=>(console.log("jshdjhsjdh",result)))
            
            )
            .catch(console.log);
        });
      }

handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            
            fetch("http://localhost:8000/Profile", { method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
              }) .then(result =>
                 
                this.setState({
                  loading: false,
                  alldata: result
                },()=>(window.location.reload()))
              
              );
          
          }
        });
    });
  };
    render() {
        const { getFieldDecorator } = this.props.form;
          const {displayName,email ,date} = this.state;
        return (
            <div>
                <Card>
                <Row>
                    <Col span={4}>
                        <SideNav/>
                    </Col>
                    <Col span={14} style={{margin:20}}>
                       <h5><b>Good Morning, {displayName ? displayName :"Adam"}</b></h5>
                       <h6> {moment(date).format("MMM DD, YYYY")}</h6>
                       <br/>
                       <h5 style={{margin:20}}>My Profile</h5>
                        <Card style={{margin:50,borderRadius:15}} hoverable>
                        <Form  onSubmit={this.handleSubmit} className="login-form">
                            <Row>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('firstName', {
                                    rules: [{ required: true, message: 'Please input your First Name!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="First Name"
                                    />,
                                )}
                                </Form.Item>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('lastName', {
                                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Last Name"
                                    />,
                                )}
                                </Form.Item>
                                </Col>
                            </Row>  
                            <Row>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('displayName', {
                                    rules: [{ required: true, message: 'Please input your Display Name!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Display Name"
                                    />,
                                )}
                                </Form.Item>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your Email!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="mail" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="Email"
                                    />,
                                )}
                                </Form.Item>
                                </Col>
                            </Row> 
                            <Row>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('phone1', {
                                    rules: [{ required: true, message: 'Please input your Phone No!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Phone No(Work)"
                                    />,
                                )}
                                </Form.Item>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('phone2', {
                                    rules: [{ required: true, message: 'Please input your Phone No!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Phone No(Work)"
                                    />,
                                )}
                                </Form.Item>                            
                                </Col>
                            </Row> 
                            <Row>
                                <Col span={10}>
                                <Form.Item>
                                {getFieldDecorator('location', {
                                    rules: [{ required: true, message: 'Please input your Location!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="location" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Location"
                                    />,
                                )}
                                </Form.Item>
                                <br/>
                                <Form.Item
                                wrapperCol={{
                                    xs: { span: 24, offset: 0 },
                                    sm: { span: 16, offset: 24 },
                                }}
                                >
                                <Button type="danger" htmlType="submit">
                                    Save Changes
                                </Button>
                                </Form.Item>
                                </Col>                           
                            </Row>                           
                            </Form>
                        </Card>
                    </Col>
                    <Col span={5}>
                            <Row>
                                <Col span={4}>
                                    <Button type='danger'> + Add Project</Button>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                            
                                <Card style={{background:"#f5f0f0",height:550}}>
                                    <div style={{textAlign:"center",marginTop:50}}>
                                    <img
                                        width={200}
                                        style={{borderRadius:20}}
                                        alt=""
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                <br/>
                                <br/>
                                <h6><b>{displayName ? displayName :"Adam Levine"}</b></h6>
                                <h6>{email ? email : "adamlevine@kyro.us"}</h6>
                                </div>
                                </Card>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                </Card>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(Profile);
export default WrappedNormalLoginForm