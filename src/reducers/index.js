import { combineReducers } from "redux";

import {customerListReducer, customerCreateReducer} from './customerReducer'
import { userLoginReducer } from "../reducers/userReducers";

export default combineReducers({
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
  userLogin: userLoginReducer
})