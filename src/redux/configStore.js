import { combineReducers, legacy_createStore } from "redux";
import { burgerReducer } from "./burgerReducer";

const rootReducer = combineReducers({
  burgerReducer: burgerReducer,
});

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
