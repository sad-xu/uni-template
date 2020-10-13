module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // 关闭空行规则
    'rule-empty-line-before': null,
    // 允许使用 @for 等操作
    'at-rule-no-unknown': null,
    // 忽略单位报错 rpx
    'unit-no-unknown': null,
    // 允许未知选择器名 page
    'selector-type-no-unknown': null
  }
}
