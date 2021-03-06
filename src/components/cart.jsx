import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import * as articleActions from '../actions/article';
import Shelf from './shelf';


class Cart extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    render() {
      const CartItems = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>
      });
        return (
          <div className="Cart">
              <Shelf addItem={this.props.action.addToCart} />
              <h2>Cart Items</h2>
              <ol>
                {CartItems}
              </ol>
          </div>
        );
      }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(cartActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
