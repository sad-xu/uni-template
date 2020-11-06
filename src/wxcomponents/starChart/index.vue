<template>
<uni-shadow-root class="starChart-index"><view class="container">
  <f2 class="f2-chart" :onInit="onInitChart"></f2>
</view></uni-shadow-root>
</template>

<script>
import F2 from '@antv/wx-f2.vue'
global['__wxVueOptions'] = {components:{'f2': F2}}

global['__wxRoute'] = 'starChart/index'
Component({
  data: {
    onInitChart(F2, config) {
      const chart = new F2.Chart(config)
      const data = [
        { value: 63.4, city: 'New York', date: '2011-10-01' },
        { value: 62.7, city: 'Alaska', date: '2011-10-01' },
        { value: 72.2, city: 'Austin', date: '2011-10-01' },
        { value: 58, city: 'New York', date: '2011-10-02' },
        { value: 59.9, city: 'Alaska', date: '2011-10-02' },
        { value: 67.7, city: 'Austin', date: '2011-10-02' },
        { value: 53.3, city: 'New York', date: '2011-10-03' },
        { value: 59.1, city: 'Alaska', date: '2011-10-03' },
        { value: 69.4, city: 'Austin', date: '2011-10-03' }
      ]
      chart.source(data, {
        date: {
          range: [0, 1],
          type: 'timeCat',
          mask: 'MM-DD'
        },
        value: {
          max: 300,
          tickCount: 4
        }
      })
      chart.area().position('date*value').color('city').adjust('stack')
      chart.line().position('date*value').color('city').adjust('stack')
      chart.render()
      // 注意：需要把chart return 出来
      return chart
    }
  }
})
export default global['__wxComponents']['starChart/index']
</script>
<style platform="mp-weixin">
.f2-chart {
  width: 100%;
  height: 500rpx;
}
</style>