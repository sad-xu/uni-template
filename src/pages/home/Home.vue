<template>
  <view class="home">
    <view class="range-wrapper">
      <view
        v-for="(item, index) in rangeList"
        :key="item"
        class="range"
        :class="index === Number(selectedRangeIndex) ? 'selected-range' : ''"
        @tap="selectedRangeIndex = index">
        {{ item }}
      </view>
      <view
        v-show="lineLeft"
        class="bottom-line"
        :style="{ left: `${lineLeft}px` }"></view>
    </view>
    <view class="info">
      <afa-simple-skeleton is-absolute :loading="loading" :skeleton="skeleton">
        <view class="info-header">
          <view>
            2000-01-01
          </view>
          <view>
            xxx
          </view>
        </view>
        <view class="info-title">
          222222222222222222
        </view>
      </afa-simple-skeleton>
    </view>
    <button class="jump-button" @tap="jumpToSearch">
      Jump to search
    </button>
    <view class="img-wrapper">
      <img src="@/static/logo.png">
      <view class="img"></view>
    </view>
    <!-- <view class="chart-wrapper">
      <afa-ec-canvas
        ref="CommonChart"
        :nodata="nodata"
        canvas-id="common-chart">
      </afa-ec-canvas>
    </view> -->
    <button @tap="jumpToA">
      AAA
    </button>
    <button @tap="jumpToB">
      BBB
    </button>
  </view>
</template>

<script>
import afaSimpleSkeleton from '../../components/afa-simple-skeleton/afa-simple-skeleton.vue'

export default {
  components: { afaSimpleSkeleton },
  data() {
    return {
      loading: true,
      skeleton: [
        [
          { marginTop: 0, width: '20%', marginRight: '60%' },
          { marginTop: 0, width: '20%' }
        ], {}
      ],
      nodata: false,
      //
      selectedRangeIndex: 0,
      rangeList: ['近一天', '近一周', '近一年'],
      lineLeft: 0
    }
  },
  watch: {
    // 下划线位置
    selectedRangeIndex: {
      handler(index) {
        setTimeout(() => {
          uni
            .createSelectorQuery()
            .in(this)
            .select('.selected-range')
            .fields(
              {
                size: true,
                rect: true
              },
              data => {
                this.lineLeft = data.width / 2 + data.left
              }
            )
            .exec()
        }, 0)
      },
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false
        // this.initChart()
      }, 3000)
    })
  },
  methods: {
    jumpToSearch() {
      uni.navigateTo({
        url: '/pages/search/search'
      })
    },
    jumpToA() {
      window.location.href = 'https://cn.bing.com/'
    },
    jumpToB() {
      window.open('https://cn.bing.com/')
    },
    initChart() {
      this.$refs.CommonChart.setOption({
        grid: {
          show: true,
          borderColor: '#eee',
          left: 1,
          top: '15%',
          right: 1,
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#999',
            align: 'left',
            showMaxLabel: false
          },
          axisTick: false,
          splitLine: false,
          axisPointer: {
            show: true,
            triggerTooltip: false,
            snap: true,
            lineStyle: {
              color: '#e5e5e5'
            },
            label: {
              show: true,
              color: '#999',
              backgroundColor: '#fff',
              padding: 2
            }
          }
        },
        yAxis: [
          {
            min: 0,
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#999'
            },
            axisTick: false,
            splitLine: false
          }
        ],
        series: [
          {
            type: 'line',
            name: '当时热度',
            itemStyle: {
              opacity: 0
            },
            lineStyle: {
              color: '#589be2'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#e7ebff'
                  },
                  {
                    offset: 1,
                    color: '#fff'
                  }
                ]
              }
            },
            data: [[978307200000, 10], [978393600000, 20], [978480000000, 30], [978566400000, 50]]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.range-wrapper {
  position: relative;
  display: flex;
  color: #fff;
  padding: 20rpx 40rpx;
  margin-bottom: 20rpx;
  .range {
    font-size: 24rpx;
    margin-right: 30rpx;
    opacity: 0.5;
    transition: transform 0.3s, opacity 0.3s;
  }
  .selected-range {
    opacity: 1;
    transform: scale(1.2);
  }
  .bottom-line {
    position: absolute;
    bottom: 0;
    height: 4rpx;
    width: 50rpx;
    border-radius: 4rpx;
    background-color: #fff;
    transition: left 0.3s;
    transform: translateX(-50%);
  }
}
.info {
  padding: 20rpx 30rpx;
  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24rpx;
    color: #999;
  }
  .info-title {
    font-size: 24rpx;
    color: #333;
    margin-top: 20rpx;
  }
}
.jump-button {
  width: 60%;
  margin: 40rpx auto;
}

.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40rpx;
  .img {
    width: 100rpx;
    height: 100rpx;
    background: url(@/static/logo.png) no-repeat;
    background-size: contain;
  }
}

.chart-wrapper {
  height: 400rpx;
}
</style>
