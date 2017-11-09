import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from './Modal';
import { Icon } from 'antd';


class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
  }
  componentWillMount(){
  }
  close = () =>{
    this.setState({
      visible:false
    })
  }
  open = () =>{
    this.setState({
      visible:true
    })
  }
  render(){

    return (<div className="chat">
      <div className="box1">
        <button>哈哈哈</button>
      </div>
      <div className="box2">
        <Modal visible={this.state.visible} close={this.close}>
          <Icon type="question-circle" />
        </Modal>
      </div>
      <button onClick={this.open}>Open Modal</button>
    </div>);
  }
};

export default withRouter(Chat);