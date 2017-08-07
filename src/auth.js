import axios from 'axios'
import jwtDecode from 'jwt-decode'

class AuthClient {

  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }

  signUp(userInfo) {
    return this.request({method: 'Post', url: "/users", data: userInfo})
      .then(response => response.data.success)
  }

  getCurrentUser() {
    const token = this.getToken()
    return token ? jwtDecode(token) : null
  }

  getToken() {
    // retrieve the token from localStorage
    return localStorage.getItem('token')
  }

  setToken(token) {
    // save the token to localStorage
    localStorage.setItem('token', token)
    // tell axios to always include the token in headers:
    this.request.defaults.headers.common.token = token
    return token
  }

  clearToken() {
    // remove the token from localStorage
    localStorage.removeItem('token')
    // tell axios to stop sending requests with the token
    delete this.request.defaults.headers.common.token
  }

}

export default new AuthClient()
