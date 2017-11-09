import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Avatar, Popover, Button } from 'antd';


// class Nav extends Component {
//
// }


class Nav extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div className="nav">
      <div className="logo">
        <Popover placement="bottom" content={(<Button onClick={()=>{
          localStorage.clear();
          this.props.history.push('/login')
        }}>登出</Button>)}>
          <Avatar size="large" icon="user" />
        </Popover>
      </div>
      <ul>
        <li><NavLink className='nav-link' to='/' activeClassName='active' exact>首页</NavLink></li>
        <li><NavLink className='nav-link' to='/table' activeClassName='active'>表格</NavLink></li>
        <li><NavLink className='nav-link' to='/map' activeClassName='active'>地图嵌入</NavLink></li>
        <li><NavLink className='nav-link' to='/charts' activeClassName='active'>图标</NavLink></li>
        <li><NavLink className='nav-link' to='/chat' activeClassName='active'>Chat</NavLink></li>
      </ul>
    </div>)
  }
}

export default withRouter(Nav);