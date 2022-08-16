# uni 示例模板

## 依赖安装前

`npm config set registry https://registry.npm.taobao.org/ -g`

## VSCode 相关

必装插件 `Vetur` `ESlint` `stylelint` `EditorConfig for VS Code`

```json
// 保存时自动校验
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
},
"editor.formatOnSave": true
```

## 内置功能

### afa-ec-canvas

h5 和 小程序 都能使用的 `echarts` 二次封装组件

### afa-skeleton _已废弃_

基于 `uview-ui` -- `skeleton` 组件的优化版，不推荐在小程序中使用

### afa-simple-skeleton

基于 `element-ui` -- `skeleton` 组件的优化版

### 分享

小程序分享 + 微信网页分享，由 `mixin` 实现

## 坑

### 模板 :style

```html
<!-- 微信小程序 -->
<!-- 无法使用字符串 -->
<view :style="`width: ${a}px;`"></view>
<!-- 用对象的形式 -->
<view :style="{width: `${a}px`"></view>
```

### uni.createSelectorQuery fields

```js
// 微信小程序
// 能获取到节点，但获取不到节点信息 data = null
uni.createSelectorQuery().select('.selected-range').fields({
  rect: true
}, data => {
  console.log('fields', data)
}).exec()
// 添加 .in(this)
uni.createSelectorQuery().in(this).select('.selected-range').fields({...})
```

### 修改打包输出目录

```js
// package.json
// UNI_OUTPUT_DIR=./dist/h5
```

## `Firefox` `safari`无法解析特定日期 `2020-10-10 10:10:10`

不使用 `new Date(2020-10-10 10:10:10)`
改用日期库如 `dayjs`

## 部分 IOS echarts 圆形阴影显示为矩形

```js
// color 使用径向渐变定义
color: {
  type: 'radial',
  x: 0.4,
  y: 0.3,
  r: 0.5,
  colorStops: [{
    offset: 0, color: 'rgb(144,149,255)'
  }, {
    offset: 1, color: '#5460f9'
  }]
}
```
