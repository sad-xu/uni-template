<template>
  <view class="wrapper">
    <!--  -->
    <view>
      <uni-tag class="tag" mark text="HBuilder" type="primary"></uni-tag>
    </view>
    <text v-for="item in hbuilderText" :key="item" class="line-text">
      {{ item }}
    </text>
    <!--  -->
    <view>
      <uni-tag class="tag" mark text="VSCode" type="primary"></uni-tag>
    </view>
    <text v-for="item in vscodeText" :key="item" class="line-text">
      {{ item }}
    </text>
    <!--  -->
    <u-line color="#007aff" :hair-line="false"></u-line>
    <!--  -->
    <view class="recommend">
      推荐操作
    </view>
    <text v-for="item in recommendText" :key="item" class="line-text">
      {{ item }}
    </text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      hbuilderText: [
        '官方出品，真机直连调试必备',
        '针对uni-app有针对性优化，如代码提示',
        '部分跨端配置方便',
        '插件不完善',
        '整体体验不佳，地位与微信开发者工具类似'
      ],
      vscodeText: [
        '插件完善，能复用积累的经验',
        '体验好',
        '没有uni特色代码提示'
      ],
      recommendText: [
        'HBuilder 作为启动和配置工具',
        'VSCode 作为主要编辑器',
        '基础开发：VSCode',
        '发布前配置：HBuilder',
        '真机调试（外网直连）：HBuilder + iTunes + iTools + 微信开发者工具'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 20rpx;
}
.tag {
  margin-left: -20rpx;
}

.recommend {
  font-size: 30rpx;
  font-weight: bold;
  margin-top: 20rpx;
}
</style>
