
export const storageService = {
  setToken (token) {
    localStorage.setItem('token', token)
  },

  getToken () {
    return localStorage.getItem('token')
  },

  purgeToken () {
    localStorage.removeItem('token')
  },

  purgeUser () {
    localStorage.removeItem('user')
  },

  setIsLogged (isLogged) {
    if (isLogged) {
      localStorage.setItem('isLogged', JSON.stringify(isLogged))
    } else {
      localStorage.removeItem('isLogged')
    }
  },

  getIsLogged () {
    return !!JSON.parse(localStorage.getItem('isLogged') || 'false')
  },

  purgeSession () {
    this.purgeToken()
    this.purgeUser()
    this.setIsLogged(false)
  }
}
