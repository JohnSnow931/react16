import React, { Component } from 'react';
import 'rc-drawer/assets/index.css';
import { NavLink } from 'react-router-dom';
import Chat from 'Component/Chat';
import Drawer from 'rc-drawer';
import { Table, Button, Calendar } from 'antd';
const userInfoStore = {
  getUser: function () {
    return this.username;
  }
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width:300,
  style:{backgroundColor: 'red'},
  render:(text) =>(<div style={{ width: 300, backgroundColor: '#ccc' }}>
    {text}
  </div>)
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      enableDragHandle: true,
      position: 'left',
      dragToggleDistance: 30,
    };
  }
  componentWillMount(){
    console.log(this.props);
    if(userInfoStore.getUser()){

    } else {

    }
  }
  onOpenChange = (open) => {
    console.log('onOpenChange', open);
    this.setState({ open });
  }
  onDock = () => {
    const docked = !this.state.docked;
    this.setState({
      docked,
    });
    if (!docked) {
      this.onOpenChange(false);
    }
  }
  openDrawer = () =>{
    this.setState({
      open: true
    })
  }
  onCloseDrawer = () => {
    this.setState({
      drawerVisible: false
    })
  }
  render(){
    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      enableDragHandle: this.state.enableDragHandle,
      position: this.state.position,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onOpenChange: this.onOpenChange,
    };
    return (<div>
      <Drawer
        sidebar={<div><input type="text"/></div>} {...drawerProps}
      >
        <Button onClick={this.openDrawer}>打开抽屉</Button>;
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      </Drawer>
    </div>);
  }
};

export default Home;