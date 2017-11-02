import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class PrivateRoute extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const userName = localStorage.getItem('userName');
    if(!userName){
      this.props.history.push('/login');
    }
  }

  render(){
    return (this.props.children);
  }
}

export default withRouter(PrivateRoute);