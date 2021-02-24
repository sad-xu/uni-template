function request(options) {
  let requestTask = null
  const p = new Promise((resolve, reject) => {
    requestTask = uni.request({
      ...options,
      // header: {
      //   'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // },
      success({ data, statusCode }) {
        if (statusCode >= 200 && statusCode < 400) {
          if (data.code === -500) {
            uni.showToast({
              icon: 'none',
              title: '网络错误',
              duration: 1000
            })
            reject(data.code)
          } else resolve(data.data)
        } else {
          uni.showToast({
            icon: 'none',
            title: '网络错误',
            duration: 1000
          })
          reject(statusCode)
        }
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
  p.abort = () => requestTask.abort()
  return p
}

export default request
