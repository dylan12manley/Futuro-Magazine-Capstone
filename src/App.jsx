import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/HomePage';
import Error404 from './components/Error404';
import Example from './components/Example';

const App = () => (
      <>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={Home} />
            <Route path='/example' component={Example} />
            <Route component={Error404} />
          </Switch>
        </div>
      </>
    );



export default App;
