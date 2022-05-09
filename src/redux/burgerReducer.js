const stateDefault = {
  burger: { salad: 1, cheese: 1, beef: 1 },

  menu: { salad: 10, cheese: 20, beef: 30 },

  total: 60,
};

export const burgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "UPDATE_AMOUNT": {
      let burger = { ...state.burger };

      if (action.amount === -1 && burger[action.name] === 0) {
        return { ...state};
      }

      burger[action.name] += action.amount;

      state.total += action.amount * state.menu[action.name];

      state.burger = burger;

      return { ...state };
    }
    default:
      return { ...state };
      break;
  }
};
