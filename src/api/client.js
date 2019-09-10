import {
  baseURL,
  fetch
} from './request'

export default {
  /**
   * 客户list
   */
  userList (params) {
    return fetch('/userList', params)
  },
  // 客户详情
  queryDetail (params) {
    return fetch('/queryById', params)
  },
  // 客户app信息
  queryUserAppList (params) {
    return fetch('/queryUserApp', params)
  },
  // 修改客户基本信息
  updateUserInfo (params) {
    return fetch('/updateUserInfo', params)
  },
  // 修改客户审核状态
  updateVerifyStatus (params) {
    return fetch('/updateVerifyStatus', params)
  }

}
