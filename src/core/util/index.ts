export const getCurrentNav = () => {
  const location = window.location.pathname

  if (location.includes('store')) return 'store'
  else if (location.includes('brand')) return 'brand'
  else if (location.includes('wish')) return 'wish'
  else if (location.includes('user')) return 'user'
  else if (location.includes('cart')) return 'cart'
  else if (location.includes('order')) return 'order'
  else if (location.includes('product')) return 'product'
  else if (location.includes('login')) return 'auth'
  else if (location.includes('signup')) return 'auth'
  else return 'home'

  // const sliceIdx = location.indexOf('/')
  // if (sliceIdx < 0) return location ? location : 'home'
  // else return location.slice(0, sliceIdx)
}

export const checkReg = (value: any, regExpress: RegExp) => {
  const isValid = regExpress.test(value)
  return isValid
}
