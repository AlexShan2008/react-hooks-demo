const store = require('store')
const axios = require('axios')
const {
  i18n
} = require('../i18n')

const isLogin = () => {
  return store.get('token')
}

const setToken = value => {
  store.set('token', value)
}

const setData = (key, value) => {
  store.set(key, value)
}

const getData = key => {
  return store.get(key)
}

const removeData = key => {
  store.remove(key)
}

const clearAllData = () => {
  store.clearAll()
}

const getI18nLng = () => {
  return i18n.language ? i18n.language : 'zh-Hans'
}

const setI18nLng = (lang) => {
  setData('language', lang)
  i18n.changeLanguage(lang)
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

const storeEncryptedUserName = (data) => {
  const {
    email,
    mobile
  } = data
  const userName = {}
  let mobileStart = ''
  let emailStart = ''
  let mobileEnd = ''
  let emailEnd = ''

  if (mobile) {
    mobileStart = mobile.slice(0, 3)
    mobileEnd = mobile.slice(7)
    return mobile ? mobileStart + '****' + mobileEnd : ''
  }

  if (email) {
    emailStart = email.slice(0, 3)
    emailEnd = email.slice(7)
    return email ? emailStart + '****' + emailEnd : ''
  }
}

module.exports = {
  setToken,
  isLogin,
  setData,
  getData,
  removeData,
  clearAllData,
  getI18nLng,
  setI18nLng,
  storeEncryptedUserName
}
