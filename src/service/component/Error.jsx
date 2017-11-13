import React, { Component } from 'react';
import Modal from './Modal';
import { Icon } from 'antd';


class Error extends Component {
  constructor(props){
    super(props);
    this.state={
      area:{
        detail:{
          string:'string'
        }
      }
    }
  }

  changeArea = () => {
    // this.setState({
    //   area: {}
    // });
    try {
      let err = new Error('新错误');
      throw err;
    } catch (e){
      console.log(e);
    }
  }
  render(){
    const {area} = this.state;
    return (<div>
      {area.detail.string}
      <button onClick={this.changeArea}>Trigger Error</button>
    </div>);
  }
};

export default Error;