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

myChart.setOption(option = {
  series: [
    {
      type: 'sankey',
      links: [
        {source:'iOS',target:'Objective-C',value:1},
        {source:'iOS',target:'Swift',value:1},
        {source:'iOS',target:'Dart',value:1},
        {source:'iOS',target:'JavaScript',value:1},
        {source:'Android',target:'Java',value:1},
        {source:'Android',target:'Kotlin',value:1},
        {source:'Android',target:'Dart',value:1},
        {source:'Android',target:'JavaScript',value:1},
        {source:'小程序',target:'JavaScript',value:1},
        {source:'网页',target:'JavaScript',value:1}
      ],
      data: [
        {name:'iOS',depth:0,value:1,label:{position:'inside'}},
        {name:'Android',depth:0,value:1,label:{position:'inside'}},
        {name:'小程序',depth:0,value:1,label:{position:'inside'}},
        {name:'网页',depth:0,value:1,label:{position:'inside'}},
        {name:'Objective-C',depth:1,value:1,label:{position:'inside'}},
        {name:'Swift',depth:1,value:1,label:{position:'inside'}},
        {name:'Java',depth:1,value:1,label:{position:'inside'}},
        {name:'Kotlin',depth:1,value:1,label:{position:'inside'}},
        {name:'JavaScript',depth:1,value:1,label:{position:'inside'}},
        {name:'Dart',depth:1,value:1,label:{position:'inside'}}
      ],
      focusNodeAdjacency: true,
      draggable: false,
      orient: 'vertical',
      levels: [{
        depth: 0,
        itemStyle: {
          color: '#fbb4ae'
        },
        lineStyle: {
          color: 'source',
          opacity: 1
        }
      }, {
        depth: 1,
        itemStyle: {
          color: '#b3cde3'
        },
        lineStyle: {
          color: 'source',
          opacity: 1
        }
      }, {
        depth: 2,
        itemStyle: {
          color: '#ccebc5'
        },
        lineStyle: {
          color: 'source',
          opacity: 1
        }
      }, {
        depth: 3,
        itemStyle: {
          color: '#decbe4'
        },
        lineStyle: {
          color: 'source',
          opacity: 1
        }
      }],
      lineStyle: {
        curveness: 0.5,
      }
    }
  ]
})

```js
{
  'uni-app': [{"date":"2018-7-27","value":2},{"date":"2019-1-21","value":1740},{"date":"2019-3-20","value":3540},{"date":"2019-4-17","value":5310},{"date":"2019-5-27","value":7080},{"date":"2019-7-9","value":8850},{"date":"2019-8-17","value":10650},{"date":"2019-9-26","value":12420},{"date":"2019-11-6","value":14190},{"date":"2019-12-17","value":15960},{"date":"2020-2-19","value":17760},{"date":"2020-4-17","value":19530},{"date":"2020-5-24","value":21300},{"date":"2020-7-9","value":23070},{"date":"2020-8-31","value":24870},{"date":"2020-11-3","value":26640}],
  'taro': [["2018-4-9",1],["2018-6-9",60],["2018-6-17",121],["2019-7-14",181],["2018-9-12",242],["2018-10-26",303],["2018-11-27",364],["2019-1-9",425],["2019-2-27",485],["2019-4-1",546],["2019-5-30",607],["2019-8-1",668],["2019-10-29",729],["2020-2-25",789],["2020-6-17",850],["2020-11-3",911]],
  'wepy': [["2016-11-23",1],["2017-6-21",45],["2017-11-10",91],["2018-1-3",138],["2018-2-3",184],["2018-3-11",230],["2018-4-8",276],["2018-5-10",322],["2018-6-20",369],["2018-8-14",415],["2018-10-16",461],["2019-1-3",507],["2019-4-1",553],["2019-7-26",600],["2020-1-30",646],["2020-11-3",692]]
}
```

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

```sh

```

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

