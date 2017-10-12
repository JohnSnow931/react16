import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// class Nav extends Component {
//
// }

const Nav = () => (<div className="nav">
    <div className="logo"></div>
    <ul>
      <li><NavLink className='nav-link' to='/' activeClassName='active' exact>首页</NavLink></li>
      <li><NavLink className='nav-link' to='/table' activeClassName='active'>表格</NavLink></li>
      <li><NavLink className='nav-link' to='/map' activeClassName='active'>地图嵌入</NavLink></li>
      <li><NavLink className='nav-link' to='/charts' activeClassName='active'>图标</NavLink></li>
      <li><NavLink className='nav-link' to='/login' activeClassName='active'>Login</NavLink></li>
    </ul>
</div>)

export default Nav;