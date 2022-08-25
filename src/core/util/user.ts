export const getToken = (key: string) => {
  return localStorage.getItem(key)
}

export const setToken = (tokenKey: string, tokenValue: string) => localStorage.setItem(tokenKey, tokenValue)

export const deleteToken = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  window.location.reload()
}

export const isUser = () => {
  return getToken('access_token')
}
