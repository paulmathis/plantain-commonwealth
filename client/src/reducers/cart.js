import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../actions';

const cart = (state = [], actions) => {
  switch (actions.type) {
    case ADD_CART_ITEM: {
      // Variable to check for if the item ammount increases

      let ammountIncrease = false;

      const itemsArray = state.items.map(item => {
        // If the item id already exists increase that items ammount by and flag the increase bool
        if (actions.item._id === item._id) {
          ammountIncrease = true;
          return { ...item, ammount: item.ammount + 1 };
        }
        return item;
      });

      // If there is no item ammounts increase, push the item to the items array with an ammount of 1
      if (!ammountIncrease) {
        itemsArray.push({ ...actions.item, ammount: 1 });
      }

      // Incrase the total of the cart by the item price
      const newTotal = state.total + actions.item.price;

      return {
        ...state,
        items: itemsArray,
        total: newTotal,
      };
    }
    case REMOVE_CART_ITEM: {
      // Get the current item from the items array
      const curItem = state.items.find(item => item._id === actions.item._id);

      // Decreases the total cart price if theres more than one of the item remove the price x ammount
      const newTotal = state.total - curItem.price * (curItem.ammount || 1);

      // Create a new array without that item
      const itemsArray = state.items.filter(item => item._id !== actions.item._id);

      // Return new state
      return {
        ...state,
        items: itemsArray,
        total: newTotal,
      };
    }
    default:
      return state;
  }
};

export default cart;
