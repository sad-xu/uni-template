# uni 示例模板

## 依赖安装前

`npm config set registry https://registry.npm.taobao.org/ -g`

`npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g`

## VSCode 相关

必装插件 `Vetur` `ESlint` `stylelint` `EditorConfig for VS Code`

```json
// 保存时自动校验
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
}
// 忽略node_modules
"files.exclude": {
  "**/node_modules": true
}
```

## 开发环境额外依赖

```txt
stylelint-config-standard: css样式规范

@vue/eslint-config-standard + eslint-plugin-vue + babel-eslint + eslint-plugin-import + eslint-plugin-node + eslint-plugin-promise + eslint-plugin-standard + @vue/cli-plugin-eslint: js、vue代码规范

node-sass + sass-loader: scss编译
```

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

### uview-ui u-skeleton

一个页面里的多个组件分别使用骨架屏，只有第一个生效

默认选择器范围是整个页面，需要添加 `.in(this.$parent)` 只查询父组件

### 修改打包输出目录

```js
// package.json
// UNI_OUTPUT_DIR=./dist/h5
```

## 依赖版本更新过快且不稳定

必须维护 `package-lock.json` 或定死版本号

## `Firefox` `safari`无法解析特定日期 `2020-10-10 10:10:10`

不使用 `new Date(2020-10-10 10:10:10)`
改用日期库如 `dayjs`

## 部分IOS echarts 圆形阴影显示为矩形

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
