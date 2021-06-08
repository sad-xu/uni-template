<template>
  <view>
    <input
      ref="Input" v-model="kw" type="text"
      class="input" :focus="focus" confirm-hold
      @confirm="focus = false">
    <!-- @click="handleClick" -->
    <view ref="Other" @tap="handleOtherClick">
      CLICK
    </view>
    <!-- <view class="chart-wrapper">
      <afa-ec-canvas ref="LineChart" canvas-id="LineChart"></afa-ec-canvas>
    </view> -->
  </view>
</template>

<script>

export default {
  data() {
    return {
      kw: '',
      focus: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.focus = true
      // var e = new Event('focus')
      // console.log(this.$refs.Input.$refs.input)
      // this.$refs.Input.$refs.input.dispatchEvent(e)
      // this.$refs.Input.$el.click()
      // this.$refs.Other.$el.click()

      // this.initChart()
    })
  },
  methods: {
    handleClick() {
      // var e = new Event('click')
      // console.log(this.$refs.Input.$refs.input)
      // this.$refs.Input.$refs.input.dispatchEvent(e)
      // this.$refs.Input.$refs.input.focus()
    },
    handleOtherClick() {
      // console.log(this.$refs.Input.$refs.input)
      // this.$refs.Input.$refs.input.focus()
    }
    // initChart() {
    //   this.$refs.LineChart.setOption({
    //     xAxis: {
    //       axisPointer: {
    //         show: true
    //       }
    //     },
    //     yAxis: {

    //     },
    //     series: [{
    //       type: 'line',
    //       data: [1, 2, 3, 4, 3, 2, 1]
    //     }]
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #fff;
  margin: 40rpx;
  padding: 10rpx;
  border-radius: 20rpx;
}

.chart-wrapper {
  height: 800rpx;
}
</style>
