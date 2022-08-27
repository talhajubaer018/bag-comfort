import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS } from "./types"
import axios from "axios"

export const listProducts = () => async (dispatch, getState) => {
  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const { userLogin: { userInfo }} = getState()

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.data.access_token}`
    }
  }
    try {
      dispatch({ type: PRODUCTS_LIST_REQUEST })

      const { data } = await axios.get(`https://qualityconnector.com/api/product`, config)

      dispatch({
        type: PRODUCTS_LIST_SUCCESS,
        payload: data.data
      })

    } catch (error) {
      dispatch({
        type: PRODUCTS_LIST_FAIL,
        payload: error.response
      })
    }
}

export const createProduct = (name, price, stock, details) => async (dispatch) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST })

    const { data } = await authAxios.post(`https://qualityconnector.com/api/product`, {
      name: name,
      price: price,
      stock: stock,
      details: details,

    })

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.data
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response
    })
  }
}