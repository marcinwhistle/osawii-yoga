//selectors

// action name creator
const reducerName = 'orders';
const createActionName = (actionName) => `api/${reducerName}/${actionName}`;

const ADD_ORDER = createActionName('ADD_ORDER');

//action creators
export const addOrder = (payload) => ({ type: ADD_ORDER, payload });

const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default ordersReducer;
