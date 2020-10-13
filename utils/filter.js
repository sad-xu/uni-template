export function symbolFormat(n) {
  n = Number(n)
  if (n > 0) return '+'
  else if (n < 0) return '-'
  else return ''
}
