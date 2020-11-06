<template>
  <view>
    <view class="line-text">
      1. 窗体级适配 leftWindow、rightWindow、topWindow
    </view>
    <view class="line-text">
      2. 组件级适配 match-media组件
    </view>
    <view class="line-text">
      3. 内容缩放拉伸 rpx 最大适配宽度
    </view>
    <u-cell-group class="cell-group">
      <u-cell-item title="示例" arrow @click="jumpTo('https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/', '宽屏适配示例')"></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {

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
