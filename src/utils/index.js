const baseUrl = '/api/'

export { baseUrl }

// 请求结束时间控制
export function requestDelay(p, delay = 300) {
  const t = new Date().getTime()
  return new Promise((resolve, reject) => {
    p.then(res => {
      const dt = new Date().getTime() - t
      if (dt < delay) {
        setTimeout(() => {
          resolve(res)
        }, delay - dt)
      } else {
        resolve(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 简易防抖
export function debounce(fn, wait = 300) {
  let timeId = null
  return function(...args) {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
