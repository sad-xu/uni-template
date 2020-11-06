<template>
  <view>
    <view class="line-title">
      uni-app 简介
    </view>
    <view v-for="item in introductionList" :key="item.title">
      <uni-section :title="item.title" type="line"></uni-section>
      <text space="nbsp" class="line-text">
        {{ item.content }}
      </text>
    </view>
    <u-cell-group class="cell-group">
      <u-cell-item title="由来" arrow @click="jumpTo('https://uniapp.dcloud.io/history', '由来')"></u-cell-item>
    </u-cell-group>
    <u-cell-group class="cell-group">
      <u-cell-item title="案例展示" arrow @click="jumpTo('https://uniapp.dcloud.io/case', '案例展示')"></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {
      introductionList: [{
        title: '技术',
        content: 'Vue.js + 微信小程序 + Weex'
      }, {
        title: '平台',
        content: `- iOS、Android、Web
- 小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）
- 快应用（vivo 、oppo、华为）
- 360小程序（仅 windows平台支持，需要在360浏览器中打开）`
      }, {
        title: '生态',
        content: `- 600万开发者用户
- 几十万应用案例
- 12亿手机端月活用户
- 数千款uni-app插件
- 70+微信/qq群
- 阿里小程序工具官方内置uni-app
- 腾讯课堂官方为uni-app录制培训课程HBuilderX官方编辑器
- 插件市场`
      }, {
        title: '开放',
        content: `- 免费并且属于Apache2.0开源协议的产品
- DCloud官方承诺无论HBuilderX、uni-app，面向中国人永久免费。`
      }]
    }
  },
  methods: {
    jumpTo(url, title) {
      uni.navigateTo({
        url: `/pages/introduction/Case?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.line-text {
  padding: 20rpx 20rpx 20rpx 40rpx;
  line-height: 50rpx;
}
</style>
