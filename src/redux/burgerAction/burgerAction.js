import { UPDATE_QUANTITY } from "../burgerType/burgerType";

export const updateQuantityAction = (item, price) => {
  return {
    type: UPDATE_QUANTITY,
    item,
    price,
  };
};
