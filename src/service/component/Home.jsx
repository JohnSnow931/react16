import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Chat from 'Component/Chat';
import Drawer from 'Component/DrawerWrapper';
import { Table, Button, Calendar, Tag } from 'antd';
const { CheckableTag } = Tag;
const userInfoStore = {
  getUser: function () {
    return this.username;
  }
}

class MyTag extends React.Component {
  state = { checked: true };
  handleChange = (checked) => {
    this.setState({ checked });
  }
  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
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
      drawerVisible: false,
    }
  }
  componentWillMount(){
    console.log(this.props);
    if(userInfoStore.getUser()){

    } else {

    }
  }
  openDrawer = () =>{
    this.setState({
      drawerVisible: true
    })
  }
  closeDrawer = () =>{
    this.setState({
      drawerVisible: false
    })
  }
  render(){
    return (<div>
      <Button onClick={this.openDrawer}>打开抽屉</Button>;
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      <Drawer visible={this.state.drawerVisible} direction="LEFT" onClose={this.closeDrawer}>

      </Drawer>
      <div className="tag-box">
        <div>
          <MyTag>Tag1</MyTag>
          <MyTag>Tag2</MyTag>
          <MyTag>Tag3</MyTag>
        </div>
        <div>
          <MyTag>Tag1</MyTag>
          <MyTag>Tag2</MyTag>
          <MyTag>Tag3</MyTag>
        </div>
        <div>
          <MyTag>Tag1</MyTag>
          <MyTag>Tag2</MyTag>
          <MyTag>Tag3</MyTag>
        </div>
      </div>
    </div>);
  }
};

export default Home;