<template>
  <view class="ec-canvas-wrapper">
    <!-- #ifdef H5 -->
    <view :id="canvasId" class="ec-canvas"></view>
    <!-- #endif -->
    <!-- #ifndef H5 -->
    <canvas
      :id="canvasId" type="2d"
      class="ec-canvas" :canvas-id="canvasId"
      @touchstart="touchStart"
      @touchmove="touchMove" @touchend="touchEnd">
    </canvas>
    <!-- #endif -->
    <cover-view v-show="nodata" class="no-data">
      暂无数据
    </cover-view>
  </view>
</template>

<script>
/*
  需要从echarts官网定制下载 https://echarts.apache.org/v4/zh/builder.html v4.9.0
  并作出如下修改
  L1  eslint-disable
  L68
    // #ifdef H5
    env = detect(navigator.userAgent);
    // #endif
    // #ifndef H5
      ...
    // #endif
  L110
*/

import * as echarts from './echarts'
// #ifndef H5
import WxCanvas from './wx-canvas'
// #endif

// #ifndef H5
function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i]
    touch.offsetX = touch.x
    touch.offsetY = touch.y
  }
  return event
}
// #endif

export default {
  props: {
    canvasId: {
      type: String,
      default: 'ec-canvas'
    },
    nodata: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // #ifdef H5
      chart: [],
      // #endif
      // #ifndef H5
      $curChart: {}
      // #endif
    }
  },
  mounted() {
    // #ifdef H5
    const chart = echarts.init(document.getElementById(this.canvasId))
    chart.showLoading('default', {
      text: '',
      color: '#201178',
      lineWidth: 3,
      spinnerRadius: 10
    })
    this.chart = Object.freeze([chart])
    chart.on('click', params => {
      this.$emit('chart-click', params)
    })
    // chart.getZr().on('click', params => {
    //   console.log('zr', params)
    // })
    // #endif
    // #ifndef H5
    echarts.registerPreprocessor(option => {
      if (option && option.series) {
        if (option.series.length > 0) {
          option.series.forEach(series => {
            series.progressive = 0
          })
        } else if (typeof option.series === 'object') {
          option.series.progressive = 0
        }
      }
    })
    this.initByNewWay()
    // #endif
  },
  methods: {
    setOption(options) {
      // #ifdef H5
      this.chart[0].hideLoading()
      this.chart[0].setOption(options)
      // #endif
      // #ifndef H5
      if (this.$curChart) {
        this.$curChart.hideLoading()
        this.$curChart.setOption(options)
      }
      // #endif
    },
    // 手动触发loading
    showLoading() {
      let chart = null
      // #ifdef H5
      if (this.chart.length) chart = this.chart[0]
      // #endif
      // #ifndef H5
      chart = this.$curChart
      // #endif
      if (chart) {
        chart.showLoading({
          text: '',
          color: '#201178',
          lineWidth: 3,
          spinnerRadius: 10
        })
      }
    },
    // #ifndef H5
    initByNewWay() {
      const query = uni.createSelectorQuery().in(this)
      query.select('.ec-canvas')
        .fields({
          node: true,
          size: true
        })
        .exec(res => {
          const canvasNode = res[0].node
          const canvasDpr = uni.getSystemInfoSync().pixelRatio
          const canvasWidth = res[0].width
          const canvasHeight = res[0].height
          let ctx
          // #ifdef MP-ALIPAY
          ctx = uni.createCanvasContext(this.canvasId, this)
          // #endif
          // #ifndef MP-ALIPAY
          ctx = canvasNode.getContext('2d')
          // #endif
          const canvas = new WxCanvas(ctx, this.canvasId, true, canvasNode)
          echarts.setCanvasCreator(() => {
            return canvas
          })
          this.initChart(canvas, canvasWidth, canvasHeight, canvasDpr)
        })
    },
    initChart(canvas, width, height, canvasDpr) {
      const $curChart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr
      })
      canvas.setChart($curChart)
      $curChart.on('click', params => {
        this.$emit('chart-click', params)
      })
      $curChart.showLoading('default', {
        text: '',
        color: '#201178',
        lineWidth: 3,
        spinnerRadius: 10
      })
      this.$curChart = $curChart
    },
    canvasToTempFilePath(opt) {
      const query = uni.createSelectorQuery().in(this)
      query
        .select('.ec-canvas')
        .fields({
          node: true,
          size: true
        })
        .exec(res => {
          const canvasNode = res[0].node
          opt.canvas = canvasNode
          uni.canvasToTempFilePath(opt)
        })
    },
    touchStart(e) {
      // if (this.ec.stopTouchEvent) {
      //   e.preventDefault()
      //   e.stopPropagation()
      //   return
      // }
      // this.$emit('touchstart', e)
      if (this.$curChart && e.touches.length > 0) {
        var touch = e.touches[0]
        var handler = this.$curChart.getZr().handler
        if (handler) {
          handler.dispatch('mousedown', {
            zrX: touch.x,
            zrY: touch.y
          })
          handler.dispatch('mousemove', {
            zrX: touch.x,
            zrY: touch.y
          })
          handler.processGesture(wrapTouch(e), 'start')
        }
      }
    },
    touchMove(e) {
      // this.$emit('touchmove', e)
      if (this.$curChart && e.touches.length > 0) {
        var touch = e.touches[0]
        var handler = this.$curChart.getZr().handler
        if (handler) {
          handler.dispatch('mousemove', {
            zrX: touch.x,
            zrY: touch.y
          })
          handler.processGesture(wrapTouch(e), 'change')
        }
      }
    },
    touchEnd(e) {
      // if (this.ec.stopTouchEvent) {
      //   e.preventDefault()
      //   e.stopPropagation()
      //   return
      // }
      // this.$emit('chart-click', e)
      // this.$emit('touchend', e)
      if (this.$curChart) {
        const touch = e.changedTouches ? e.changedTouches[0] : {}
        var handler = this.$curChart.getZr().handler
        if (handler) {
          handler.dispatch('mouseup', {
            zrX: touch.x,
            zrY: touch.y
          })
          handler.dispatch('click', {
            zrX: touch.x,
            zrY: touch.y
          })
          handler.processGesture(wrapTouch(e), 'end')
        }
      }
    }
    // #endif
  }
}
</script>

<style lang="scss" scoped>
.ec-canvas-wrapper {
  position: relative;
  height: 100%;
}
.ec-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.no-data {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24rpx;
  color: #999;
}
</style>
