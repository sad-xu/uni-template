module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        // 关闭空行规则
        'rule-empty-line-before': null,
        // 允许rpx单位
        'unit-no-unknown': [true, {
            ignoreUnits: ['rpx']
        }],
        // 允许未知选择器名 page等
        'selector-type-no-unknown': null
    }
}