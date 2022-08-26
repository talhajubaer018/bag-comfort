import axios from "axios"
import { STATES_LIST_FAIL, STATES_LIST_REQUEST, STATES_LIST_SUCCESS } from "./types"

export const listStates = () => async (dispatch, getState) => {
  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const { userLogin: { userInfo }} = getState()

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.data.access_token}`
    }
  }
    try {
      dispatch({ type: STATES_LIST_REQUEST })

      const { data } = await axios.get(`https://qualityconnector.com/api/state`, config)

      dispatch({
        type: STATES_LIST_SUCCESS,
        payload: data.data
      })
      console.log(data)

    } catch (error) {
      dispatch({
        type: STATES_LIST_FAIL,
        payload: error.response
      })
    }
}