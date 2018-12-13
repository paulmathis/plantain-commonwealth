export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export function addCartItem(item) {
  return {
    type: ADD_CART_ITEM,
    item,
  };
}

export function removeCartItem(item) {
  return {
    type: REMOVE_CART_ITEM,
    item,
  };
}
