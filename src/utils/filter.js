export function toFixed(input, num = 2) {
  if (input === null || input === '' || isNaN(Number(input))) return '--'
  return Number(input).toFixed(num)
}

export function toFixedChg(input, mul = 100, num = 2) {
  if (input === null || input === '' || isNaN(Number(input))) return '--'
  return `${input > 0 ? '+' : ''}${Number(input * mul).toFixed(num)}`
}

// 根据数值大小判断颜色
export function priceColor(n) {
  n = Number(n)
  if (isNaN(n)) return '#999'
  if (n > 0) {
    return '#FF776F'
  } else if (n === 0) {
    return '#aaa'
  } else if (n < 0) {
    return '#24BB79'
  }
}

// 金额
export function parsePrice(n) {
  let s = ''
  let v = n
  if (n >= 100000000) {
    s = '亿'
    v = toFixed(n / 100000000)
  } else if (n >= 10000) {
    s = '万'
    v = toFixed(n / 10000)
  } else {
    v = toFixed(n)
  }
  if (v === '--') return v
  return +v + s
}
