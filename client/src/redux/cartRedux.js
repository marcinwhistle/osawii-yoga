/* reducer */
const initialState = {
  products: [], // Initialize with an empty array
};

/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;
/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHECKOUT = createActionName('CHECKOUT');

/* action creators */
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeProduct = (payload) => ({ payload, type: REMOVE_PRODUCT });
export const updateProduct = (payload) => ({ payload, type: UPDATE_PRODUCT });
export const checkout = (payload) => ({ payload, type: CHECKOUT });

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      if (
        statePart.products.find((product) => product.id === action.payload.id)
      ) {
        return {
          ...statePart,
          products: statePart.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, { ...action.payload, amount: 1 }],
        };
      }
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    }
    case UPDATE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                ...action.payload,
              }
            : product,
        ),
      };
    }
    case CHECKOUT: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
