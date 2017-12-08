import React, {Component} from 'react';
import Nav from 'Component/Nav';
import Home from 'Component/Home';
import Login from 'Component/Login';
import Chat from 'Component/Chat';
import Error from 'Component/Error';
import List from 'Component/List';
import ErrorWrapper from 'Component/ErrorWrapper';
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
                  <Route path="/chat" component={Chat}/>
                  <Route path="/error" render={() => (<ErrorWrapper><Error /></ErrorWrapper>) } />
                  <Route path="/list" component={List} />
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
