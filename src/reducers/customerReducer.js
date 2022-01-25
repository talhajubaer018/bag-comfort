import { CUSTOMERS_LIST_REQUEST, CUSTOMERS_LIST_SUCCESS, CUSTOMERS_LIST_FAIL } from '../actions/types'

export const customerListReducer = (state = { customers: [] }, action) => {
  switch(action.type) {
    case CUSTOMERS_LIST_REQUEST:
      return { loading: true, customers: [] }
    case CUSTOMERS_LIST_SUCCESS:
      return { loading: false, customers: action.payload }
    case CUSTOMERS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}