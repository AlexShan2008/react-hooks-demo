const axios = require('axios')
const {
  origin,
  devOrigin,
  pathname,
  productionHostName
} = require('@config')

const store = require('store')

let hostname = 'localhost'

if (typeof location !== 'undefined') {
  // eslint-disable-next-line no-undef
  hostname = location.hostname
}
const isProd = hostname === productionHostName
const baseURL = isProd ? origin + pathname : devOrigin + pathname

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = false

axios.interceptors.response.use((response) => {
  const data = response.data
  if (data.code === -1) {
  // eslint-disable-next-line no-undef
    location.href = '/'
  }
  return response
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 500:
        err.message = '请求错误'
        break

      case 404:
        err.message = '请求错误'
        break

      case 401:
        // eslint-disable-next-line no-undef
        location.href = '/'
        err.message = 'token已过期，请重新登录！'
        store.clearAll()
        break
      default:
    }
  }
  return Promise.reject(err)
})

function fetch (url, params, responseType) {
  return new Promise((resolve, reject) => {
    const token = store.get('token')
    let Authorization = ''
    if (token) {
      Authorization = token
    }

    axios.post(url, params, {

      headers: {
        Authorization: Authorization
      },
      responseType
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function fetchGet (url, params, responseType) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers: {
        Authorization: store.get('token')
      },
      responseType
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export {
  baseURL,
  fetch,
  fetchGet
}
