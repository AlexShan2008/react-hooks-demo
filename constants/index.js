// fallback language
export const defaultLanguage = 'zh'
export const fallbackLng = 'zh'

// is dev env
export const isDev = process.env.NODE_ENV !== 'production'

// is server side
export const isServer = typeof window === 'undefined'

// asset prefix
export const assetPrefix = isDev ? '' : ''

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
