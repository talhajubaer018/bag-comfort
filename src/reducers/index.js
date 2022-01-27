import { combineReducers } from "redux";

import {customerListReducer, customerCreateReducer, customerDeleteReducer} from './customerReducer'
import { userLoginReducer } from "../reducers/userReducers";

export default combineReducers({
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
  userLogin: userLoginReducer,
  customerDelete: customerDeleteReducer
})