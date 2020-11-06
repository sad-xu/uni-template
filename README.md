# uni 示例模板

## 框架对比

平台
原生: iOS Android
小程序: 微信、支付宝、百度、字节、QQ、快应用（vivo 、oppo、华为）、360
网页：移动端、Pad、PC

(Objective-C Swift Java Kotlin) Dart JavaScript

Flutter react Vue

react native
weex
flutter
PWA

uni-app taro wepy

## uni 简介

使用 Vue.js 开发所有前端应用的框架

开发者编写一套代码，可发布到iOS、Android、Web、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用（vivo 、oppo、华为）、360小程序（仅 windows平台支持，需要在360浏览器中打开）

600万开发者用户，几十万应用案例、12亿手机端月活用户，数千款uni-app插件、70+微信/qq群。阿里小程序工具官方内置uni-app，腾讯课堂官方为uni-app录制培训课程

## 开发工具

VScode + HBuilder

iOS真机调试：iTunes + iTools + 微信开发者工具

* HBuilder

  真机调试必备 插件不完善 整体体验不佳

* VSCode

  插件完善 体验好

HBuilder 作为启动工具，VSCode 作为主要编辑器

## 新建项目

* 通过 HBuilder 创建

  项目依赖本地 HBuilder，后端无法自动打包发布

* 通过 cli 创建

  所有依赖都在项目下，可手动管理，具有一致性

## 项目结构

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

## 缺陷

1. 路由名直接映射文件结构 无法自定义

2. 打包输出指定位置 UNI_OUTPUT_DIR=./dist/h5
