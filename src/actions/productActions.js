import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "./types"
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

      const { data } = await axios.get(`https://bagcomfort.com/api/product`, config)

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