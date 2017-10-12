import React, { Component } from 'react';
import Nav from 'Component/Nav';
import Home from 'Component/Home';
import Login from 'Component/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <div className="route-container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
