import React, {Component} from 'react';
import Nav from 'Component/Nav';
import Home from 'Component/Home';
import Login from 'Component/Login';
import PrivateRoute from 'Component/PrivateRoute';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="app">
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute>
              <Nav />
              <div className="route-container">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route render={() => <div> oops! jump to a strange place </div>}/>
                </Switch>
              </div>
            </PrivateRoute>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
