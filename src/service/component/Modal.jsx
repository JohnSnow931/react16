import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd'

class Modal extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
  }
  render(){
    const shoulShowModal = this.props.visible || false;
    return (
    shoulShowModal ? (ReactDOM.createPortal(<div className="modal-fixed">
      <Button onClick={this.props.close}>关闭</Button>
      {this.props.children}
    </div>, document.getElementById('modal'))) : ''
    );
  }
};

export default withRouter(Modal);