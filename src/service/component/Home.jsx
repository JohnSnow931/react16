import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Chat from 'Component/Chat';
import { Table } from 'antd';
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
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    </div>);
  }
};

export default Home;