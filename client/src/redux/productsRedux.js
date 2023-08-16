import { API_URL } from '../config';

//selectors
export const getAllProducts = ({ products }) => products;

// action name creator
const reducerName = 'products';
const createActionName = (actionName) => `api/${reducerName}/${actionName}`;

const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

//action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/api/products')
      .then((res) => res.json())
      .then((products) => dispatch(updateProducts(products)));
  };
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default productsReducer;
