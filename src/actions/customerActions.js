import { CUSTOMERS_LIST_REQUEST, CUSTOMERS_LIST_SUCCESS, CUSTOMERS_LIST_FAIL } from './types'
import axios from 'axios'

export const listCustomers = () => async (dispatch) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    try {
      dispatch({ type: CUSTOMERS_LIST_REQUEST })

      const { data } = await authAxios.get(`https://bagcomfort.com/api/customer`)

      dispatch({
        type: CUSTOMERS_LIST_SUCCESS,
        payload: data.data
      })

    } catch (error) {
      dispatch({
        type: CUSTOMERS_LIST_FAIL,
        payload: error.response
      })
    }
}

