import axios from "axios"
import { ORDERS_LIST_FAIL, ORDERS_LIST_REQUEST, ORDERS_LIST_SUCCESS } from "./types"

export const listOrders = () => async (dispatch, getState) => {
  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const { userLogin: { userInfo }} = getState()

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.data.access_token}`
    }
  }
    try {
      dispatch({ type: ORDERS_LIST_REQUEST })

      const { data } = await axios.get(`https://qualityconnector.com/api/order`, config)

      dispatch({
        type: ORDERS_LIST_SUCCESS,
        payload: data.data

      })

    } catch (error) {
      dispatch({
        type: ORDERS_LIST_FAIL,
        payload: error.response
      })
    }
}