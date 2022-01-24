// export const getUser = () => {
//   const userString = sessionStorage.getItem('user')
//   if(userString) return JSON.parse(userString)
//   else return null
// }

export const getToken = () => {
  return sessionStorage.getItem('token') || null
}

export const setUserSession = (token) => {
  sessionStorage.setItem('token', token)
  // sessionStorage.setItem('user', JSON.stringify(user))
}

export const removeUserSession = () => {
  sessionStorage.removeItem('token')
  // sessionStorage.removeItem('user')
}