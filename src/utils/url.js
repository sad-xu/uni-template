const isDev = process.env.NODE_ENV !== 'production'

// #ifdef H5
const urlRoot = ''
// #endif
// #ifndef H5
const urlRoot = 'https://dc.info.afa.ai' //'http://r2.dsjcj.cc'
// #endif

export const urlBase = urlRoot + (isDev ? '/dc' : '/api/dc')
