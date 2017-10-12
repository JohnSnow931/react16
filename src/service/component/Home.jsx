import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Chat from 'Component/Chat';
const userInfoStore = {
  getUser: function () {
    return this.username;
  }
}

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log(this.props);
    if(userInfoStore.getUser()){

    } else {

    }
  }
  render(){
    return (<div>
      hellow;
      <Chat></Chat>
    </div>);
  }
};

export default Home;