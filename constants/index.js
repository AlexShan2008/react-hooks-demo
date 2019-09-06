let host = null

// fallback language
export const defaultLanguage = 'zh'
export const fallbackLng = 'zh'

// is dev env
export const isDev = process.env.NODE_ENV !== 'production'

// is server side
export const isServer = typeof window === 'undefined'

// asset prefix
export const assetPrefix = isDev ? '' : ''

export const CAPTCHA_TYPE = {
  REGISTER: "REGISTER",
  FORGET: "FORGET",
  BIND: "BIND",
  UPDATE: "UPDATE",
  BINDMOBILE: "BIND",
  BINDEMAIL: "BIND",
  UPDATEPASSWORD: "FORGET",
  UPDATEMOBILE: "BIND",
  UPDATEEMAIL: "BIND",
}

export const ROWS_PER_PAGE_OPTIONS = [20, 50, 100, 200]

// update host for server side
export default (ctx) => {
  if (ctx) {
    const {
      req = {}
    } = ctx
    if (req.extraData && req.extraData.host) {
      host = req.extraData.host
    } else {
      const {
        headers = {}
      } = req
      host = headers['host']
    }
  }
}
