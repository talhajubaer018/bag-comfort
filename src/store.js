import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from './reducers/index'

if (typeof window !== 'undefined') {
  var userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}
if (typeof window !== 'undefined') {
  var userPhoneFromStorage = localStorage.getItem('userPhone') ? JSON.parse(localStorage.getItem('userPhone')) : null
}
const initialState = {
  userLogin: {
     userInfo: userInfoFromStorage,
     userPhone: userPhoneFromStorage
   }
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

