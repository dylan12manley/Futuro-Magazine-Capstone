import React from 'react';
import { Component } from 'react';
import Shelf from './shelf';
import Cart from './cart';

class Example extends Component {
    render() {
        return (
          <div className="App">
          <header className="App-header">
          <div>
          <Cart />
          </div>
          </header>
          </div>
        );
      }
}



export default Example;
