<template>
  <transition name="fade">
    <view
      v-if="loading" class="afa-skeleton-wrapper" :style="{
        width: windowWidth + 'px',
        height: windowHeight + 'px',
        backgroundColor: bgColor,
        borderRadius: borderRadius + 'rpx',
      }"
      @touchmove.stop.prevent>
      <view
        v-for="item in rectNodes" :key="item.id" :class="[animation ? 'skeleton-fade' : '']"
        :style="{
          width: item.width + 'px',
          height: item.height + 'px',
          backgroundColor: elColor,
          borderRadius: 0,
          left: (item.left - left) + 'px',
          top: (item.top - top) + 'px'
        }">
      </view>
      <view
        v-for="item in circleNodes" :key="item.id" :class="animation ? 'skeleton-fade' : ''"
        :style="{
          width: item.width + 'px',
          height: item.height + 'px',
          backgroundColor: elColor,
          borderRadius: item.width / 2 + 'px',
          left: (item.left - left) + 'px',
          top: (item.top - top) + 'px'
        }">
      </view>
      <view
        v-for="item in filletNodes" :key="item.id" :class="animation ? 'skeleton-fade' : ''"
        :style="{
          width: item.width + 'px',
          height: item.height + 'px',
          backgroundColor: elColor,
          borderRadius: filletBorderRadius + 'rpx',
          left: (item.left - left) + 'px',
          top: (item.top - top) + 'px'
        }">
      </view>
    </view>
  </transition>
</template>

<script>
/**
  * skeleton 骨架屏
  * @description 骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。
  * @property {String} el-color 骨架块状元素的背景颜色（默认#e5e5e5）
  * @property {String} bg-color 骨架组件背景颜色（默认#ffffff）
  * @property {Boolean} animation 骨架块是否显示动画效果（默认false）
  * @property {String Number} border-radius u-skeleton-fillet类名元素，对应的骨架块的圆角大小，单位rpx（默认10）
  * @property {Boolean} loading 是否显示骨架组件，请求完成后，将此值设置为false（默认true）
  * @example <u-skeleton :loading="true" :animation="true"></u-skeleton>
  */

let keyIndex = 0

export default {
  name: 'ASkeleton',
  props: {
    // 需要渲染的元素背景颜色
    elColor: {
      type: String,
      default: '#e5e5e5'
    },
    // 整个骨架屏页面的背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // 是否显示加载动画
    animation: {
      type: Boolean,
      default: false
    },
    // 圆角值，只对类名为u-skeleton-fillet的元素生效，为数值，不带单位
    filletBorderRadius: {
      type: [String, Number],
      default: '10'
    },
    // 圆角值 对最外层生效
    borderRadius: {
      type: [String, Number],
      default: '10'
    },
    // 是否显示骨架，true-显示，false-隐藏
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      windowWidth: 750, // 骨架屏宽度
      windowHeight: 1500, // 骨架屏高度
      filletNodes: [], // 圆角元素
      circleNodes: [], // 圆形元素
      rectNodes: [], // 矩形元素
      top: 0,
      left: 0
    }
  },
  watch: {
    // loading手动显示时，重新渲染
    loading(val) {
      if (val) {
        this.selecterQueryInfo()
      }
    }
  },
  mounted() {
    // 获取系统信息
    // const systemInfo = uni.getSystemInfoSync()
    // this.windowHeight = systemInfo.windowHeight
    // this.windowWidth = systemInfo.windowWidth
    this.selecterQueryInfo()
  },
  methods: {
    // 查询各节点的信息
    selecterQueryInfo() {
      let query = ''
      query = uni.createSelectorQuery().in(this.$parent)
      query.select('.afa-skeleton').fields({
        rect: true,
        size: true
      }, data => {
        this.windowHeight = data.height
        this.windowWidth = data.width
        this.top = data.bottom - data.height
        this.left = data.left
      }).exec()

      // query.select('.afa-skeleton').boundingClientRect().exec(res => {
      //   console.log(res)
      //   this.windowHeight = res[0].height
      //   this.windowWidth = res[0].width
      //   this.top = res[0].bottom - res[0].height
      //   this.left = res[0].left
      // })
      // 矩形骨架元素
      this.getNodesInfo('.afa-skeleton-rect').exec(res => {
        if (!res[0]) return
        this.rectNodes = res[0].map(item => ({
          ...item,
          id: keyIndex++
        }))
      })
      // 圆形骨架元素
      this.getNodesInfo('.afa-skeleton-circle').exec(res => {
        if (!res[0]) return
        this.circleNodes = res[0].map(item => ({
          ...item,
          id: keyIndex++
        }))
      })
      // 圆角骨架元素
      this.getNodesInfo('.afa-skeleton-fillet').exec(res => {
        if (!res[0]) return
        this.filletNodes = res[0].map(item => ({
          ...item,
          id: keyIndex++
        }))
      })
    },
    getNodesInfo(selectName) {
      return uni.createSelectorQuery()
        .in(this.$parent)
        .selectAll(selectName)
        .boundingClientRect()
    }
  }
}
</script>

<style lang="scss" scoped>
  .afa-skeleton-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 6;
    view {
      position: absolute;
    }
  }

  .skeleton-fade {
    width: 100%;
    height: 100%;
    background: rgb(194, 207, 214);
    animation-duration: 1.5s;
    animation-name: blink;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes blink {
    0% {
      background-color: #d9d9d9;
    }
    50% {
      background-color: #f2f2f2;
    }
    100% {
      background-color: #d9d9d9;
    }
  }

  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
