import dayjs from 'dayjs'

// 请求结束时间控制
export function requestDelay(p, delay = 300) {
  const t = new Date().getTime()
  return new Promise((resolve, reject) => {
    p.then((res) => {
      const dt = new Date().getTime() - t
      if (dt < delay) {
        setTimeout(() => {
          resolve(res)
        }, delay - dt)
      } else {
        resolve(res)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}

// 日期解析
export function parseDate(d) {
  const now = dayjs()
  const date = dayjs(d)
  if (now.year() - date.year() >= 1) return date.format('YYYY年M月D日 H:mm')
  else if (now.dayOfYear() - date.dayOfYear() >= 2) {
    return date.format('M月D日 H:mm')
  } else if (now.dayOfYear() - date.dayOfYear() >= 1) {
    return `昨天 ${date.format('H:mm')}`
  } else if (now.hour() - date.hour() >= 1) return `今天 ${date.format('H:mm')}`
  else if (now.minute() - date.minute() >= 1) {
    return `${now.minute() - date.minute()}分钟前`
  } else return '刚刚'
}

// 简易防抖
export function debounce(fn, wait = 300) {
  let timeId = null
  return function (...args) {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
