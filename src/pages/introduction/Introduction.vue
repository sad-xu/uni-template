<template>
  <view>
    <view class="topic">
      uni 简介
    </view>
    <view v-for="item in introductionList" :key="item.title">
      <uni-section :title="item.title" type="line"></uni-section>
      <view class="content">
        {{ item.content }}
      </view>
    </view>
    <view>百度指数</view>
    <view>Github star</view>
    <view id="chart-wrapper"></view>
    <button @tap="handleTap">
      官网案例展示
    </button>
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
        content: 'iOS、Android、Web、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用（vivo 、oppo、华为）、360小程序（仅 windows平台支持，需要在360浏览器中打开）'
      }, {
        title: '生态',
        content: '600万开发者用户，几十万应用案例、12亿手机端月活用户，数千款uni-app插件、70+微信/qq群。阿里小程序工具官方内置uni-app，腾讯课堂官方为uni-app录制培训课程HBuilderX官方编辑器，插件市场'
      }, {
        title: '开放',
        content: '免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向中国人永久免费。'
      }, {
        title: '趋势',
        content: ''
      }]
    }
  },
  mounted() {
    this.$nextTick(() => {
      // const chartWrapper = this.$el.querySelector('#chart-wrapper')
      // const canvas = document.createElement('canvas')
      // canvas.id = 'canvas'
      // chartWrapper.appendChild(canvas)
      // this.initChart(canvas)
    })
  },
  methods: {
    initChart(canvas) {
      const chartWrapper = this.$el.querySelector('#chart-wrapper')
      const chart = new F2.Chart({
        el: canvas,
        pixelRatio: window.devicePixelRatio,
        width: chartWrapper.offsetWidth,
        height: chartWrapper.offsetHeight
      })
      const data = [{ date: '2018-07-27', value: 1 }, { date: '2019-01-21', value: 58 }, { date: '2019-03-20', value: 118 }, { date: '2019-04-17', value: 177 }, { date: '2019-05-27', value: 236 }, { date: '2019-07-09', value: 295 }, { date: '2019-08-17', value: 355 }, { date: '2019-09-26', value: 414 }, { date: '2019-11-06', value: 473 }, { date: '2019-12-17', value: 532 }, { date: '2020-02-19', value: 592 }, { date: '2020-04-17', value: 651 }, { date: '2020-05-24', value: 710 }, { date: '2020-07-09', value: 769 }, { date: '2020-08-31', value: 829 }, { date: '2020-11-03', value: 888 }]
      console.log(data)
      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      })
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      })
      chart.axis('date', {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.line().position('date*value').shape('smooth')
      // chart.area()
      //   .position('date*value')
      //   .color('l(90) 0:#1890FF 1:#f7f7f7')
      //   .shape('smooth')
      chart.render()
    },
    handleTap() {
      console.log('tap')
      uni.navigateTo({
        url: '/pages/introduction/Case'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 30rpx;
}

#chart-wrapper {
  width: 100%;
  height: 600rpx;
}
</style>
