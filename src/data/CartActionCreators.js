import { ActionTypes } from './Types';

export const addToCart = (product, quantity) => {
  return {
    type: ActionTypes.CART_ADD,
    payload: {
      product,
      quantity: quantity || 1,
    },
  };
};

export const updateCartQuantity = (product, quantity) => {
  return {
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity },
  };
};

export const removeFromCart = product => {
  return {
    type: ActionTypes.CART_REMOVE,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CART_CLEAR,
  };
};
