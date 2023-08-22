import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initial State';

//import reducers
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';
import ordersReducer from './ordersRedux';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  order: ordersReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
