import cart from './cart';
import articles from './articles'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart,
  articles
})

export default rootReducer;
