import { STATES_LIST_FAIL, STATES_LIST_REQUEST, STATES_LIST_SUCCESS } from "../actions/types"

export const stateListReducer = (state = { states: [] }, action) => {
  switch(action.type) {
    case STATES_LIST_REQUEST:
      return { loading: true, states: [] }
    case STATES_LIST_SUCCESS:
      return { loading: false, states: action.payload }
    case STATES_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}