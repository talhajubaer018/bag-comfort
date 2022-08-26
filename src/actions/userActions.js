import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./types"

export const login = (phone, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`https://qualityconnector.com/api/login`, { phone, password }, config)
    dispatch ({ type: USER_LOGIN_SUCCESS, payload: { data: data.data, phone } })

    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('userPhone', JSON.stringify(phone))
  } catch (error) {
    dispatch ({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('userPhone')
  dispatch({ type: USER_LOGOUT })
}