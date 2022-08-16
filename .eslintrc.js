module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  globals: {
    uni: true,
    wx: true,
    plus: true,
    getApp: true,
    getCurrentPages: true
  },
  extends: ['@vue/standard', 'plugin:vue/recommended'],
  rules: {
    // 多属性换行规则
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: {
          max: 3,
          allowFirstLine: false
        }
      }
    ],
    // 标签结束不换行
    'vue/html-closing-bracket-newline': 0,
    // 标签禁止自闭
    'vue/html-self-closing': 0,
    // 函数左括号不加空格
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/custom-event-name-casing': 0
  }
}
