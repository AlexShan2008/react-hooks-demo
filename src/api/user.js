import {
  baseURL,
  fetch
} from './request'

export default {
  /**
   * 登录
   */
  login(params) {
    return fetch('/login', params)
  },
  // 退出登录
  logout(params) {
    return fetch('/logout', params)
  },
}
