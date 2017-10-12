import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Chat extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
  }
  render(){
    console.log(this.props);
    return (<div>
      <h2>Go To Table Page</h2>
    </div>);
  }
};

export default withRouter(Chat);