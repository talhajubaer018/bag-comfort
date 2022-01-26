import { combineReducers } from "redux";

import {customerListReducer, customerCreateReducer} from './customerReducer'

export default combineReducers({
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
})