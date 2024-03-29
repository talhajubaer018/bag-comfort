import { combineReducers } from "redux";

import {customerListReducer, customerCreateReducer, customerDeleteReducer} from './customerReducer'
import { userLoginReducer } from "../reducers/userReducers";
import { productListReducer, productCreateReducer } from "./productReducer";
import { stateListReducer } from "./statesReducer";
import { orderListReducer } from "./orderReducer";

export default combineReducers({
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
  customerDelete: customerDeleteReducer,
  userLogin: userLoginReducer,
  productList: productListReducer,
  productCreate: productCreateReducer,
  stateList: stateListReducer,
  orderList: orderListReducer
})