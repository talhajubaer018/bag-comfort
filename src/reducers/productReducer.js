import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS } from "../actions/types"

export const productListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}