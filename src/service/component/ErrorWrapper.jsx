import React, { Component } from 'react';
import Modal from './Modal';
import { Icon } from 'antd';


class ErrorWrapper extends Component {
  constructor(props){
    super(props);
    this.state={
      hasError:false
    }
  }
  componentDidCatch(error, info){
    this.setState({
      hasError:true
    });
    console.log(error, info);
  }
  render(){
    const {hasError} = this.state;
    return (hasError ? <div>
      组件内部发生错误，请打开控制台查看详情；
    </div> : this.props.children);
  }
};

export default ErrorWrapper;