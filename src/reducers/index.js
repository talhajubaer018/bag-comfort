import { combineReducers } from "redux";

import {customerListReducer, customerCreateReducer, customerDeleteReducer} from './customerReducer'
import { userLoginReducer } from "../reducers/userReducers";
import { productListReducer } from "./productReducer";
import { stateListReducer } from "./statesReducer";
import { orderListReducer } from "./orderReducer";

export default combineReducers({
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
  userLogin: userLoginReducer,
  customerDelete: customerDeleteReducer,
  productList: productListReducer,
  stateList: stateListReducer,
  orderList: orderListReducer
})