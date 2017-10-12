import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (<div className="login">
      <Form>
        <FormItem label='Username'>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="profile" style={{ fontSize: 13 }} />}/>
          )}
        </FormItem>
        <FormItem label="Password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
      </Form>
      <Button type="primary" size="large">Login</Button>
    </div>)
  }
}

export default Form.create()(Login);