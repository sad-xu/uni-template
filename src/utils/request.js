// const isDev = process.env.NODE_ENV === 'development'

function request(options) {
  let requestTask = null
  const p = new Promise((resolve, reject) => {
    // if (!options.data) {
    //   options.data = {}
    // } else if (options.method !== 'POST') {
    //   for (const k in options.data) {
    //     if (options.data[k] === undefined || options.data[k] === null) {
    //       delete options.data[k]
    //     }
    //   }
    // }
    let header = {
      Authorization: 'token'
    }

    if (options.noAuth) {
      // 无需鉴权
    } else {
      // if (!app) app = getApp()
      // const token = uni.getStorageSync('token') // app.globalData.token
      // 本地无用户信息 跳转登录
      // if (!token) {
      //   console.log('no-token')
      //   reLaunchToHome()
      //   // eslint-disable-next-line prefer-promise-reject-errors
      //   reject('未登录')
      //   return
      // }
      // header = {
      //   ...header,
      //   Authorization: token
      // }
    }
    if (options.header) {
      header = {
        ...header,
        ...options.header
      }
    }

    requestTask = uni.request({
      ...options,
      header,
      success({ data, statusCode }) {
        if (statusCode >= 200 && statusCode < 400) {
          const code = data.code
          if (code && code !== 200) {
            console.log(data)
            if (options.noAuth) {
              reject(code)
              return
            }
            if (code === 403 || code === 401) {
              // 无权限
              // getApp().globalData.token = ''
              // uni.setStorage({
              //   key: 'token',
              //   data: ''
              // })
              // uni.reLaunch({
              //   url: '/pages/home/home'
              // })
              reject(code)
            } else reject(code)
          } else resolve(data.data ? data.data : data)
        } else {
          // uni.showToast({
          //   icon: 'none',
          //   title: '网络错误',
          //   duration: 1000
          // })
          reject(statusCode)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
  p.abort = () => requestTask.abort()
  return p
}

export default request
