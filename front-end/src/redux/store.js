import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  getProctsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import authReducer from "./reducers/api";
import fetch_current_userReducer from "./reducers/setCurrentUser";
const reducer = combineReducers({
  currentuser: fetch_current_userReducer,
  getProducts: getProctsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  authReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
