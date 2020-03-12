import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Cart from './components/cart'
import Art from './components/ArtPage';
import LandingPage from './components/LandingPage';
import Home from './components/HomePage';
import Error404 from './components/Error404';

class App extends Component {
  render() {
    return (
      <>
      <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/art' component={Art} />
        <Route component={Error404} />
      </Switch>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <Cart />
          </div>
        </header>
      </div>
      </div>
      </>
    );
  }
}

export default App;
