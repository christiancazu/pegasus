
export const storageService = {
  setToken (token: string) {
    localStorage.setItem('token', token)
  },

  getToken (): string|null {
    return localStorage.getItem('token')
  },

  purgeToken () {
    localStorage.removeItem('token')
  },

  purgeUser () {
    localStorage.removeItem('user')
  },

  setIsLogged (isLogged: boolean) {
    if (isLogged) {
      localStorage.setItem('isLogged', JSON.stringify(isLogged))
    } else {
      localStorage.removeItem('isLogged')
    }
  },

  getIsLogged (): boolean {
    return !!JSON.parse(localStorage.getItem('isLogged') || 'false')
  },

  purgeSession () {
    this.purgeToken()
    this.purgeUser()
    this.setIsLogged(false)
  }
}
