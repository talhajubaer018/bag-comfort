import { CUSTOMERS_LIST_REQUEST, CUSTOMERS_LIST_SUCCESS, CUSTOMERS_LIST_FAIL, CUSTOMER_CREATE_REQUEST, CUSTOMER_CREATE_SUCCESS, CUSTOMER_CREATE_FAIL, CUSTOMER_DELETE_REQUEST, CUSTOMER_DELETE_SUCCESS, CUSTOMER_DELETE_FAIL } from './types'
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

      const { data } = await authAxios.get(`https://qualityconnector.com/api/customer`)

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

export const createCustomer = (name, address, state_id) => async (dispatch) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  try {
    dispatch({ type: CUSTOMER_CREATE_REQUEST })

    const { data } = await authAxios.post(`https://qualityconnector.com/api/customer`, {
      name: name,
      address: address,
      state_id: state_id,

    })

    dispatch({
      type: CUSTOMER_CREATE_SUCCESS,
      payload: data.data
    })

  } catch (error) {
    dispatch({
      type: CUSTOMER_CREATE_FAIL,
      payload: error.response
    })
  }
}

export const deleteCustomer = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_DELETE_REQUEST })

    const { userLogin: { userInfo }} = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.access_token}`
      }
    }

    const { data } = await axios.delete(`https://qualityconnector.com/api/customer/${id}`, config)

    dispatch({
      type: CUSTOMER_DELETE_SUCCESS
    })
  }
  catch (error) {
    dispatch({
      type: CUSTOMER_DELETE_FAIL,
      payload: error.response
    })
  }
}