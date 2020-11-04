<template>
  <view>
    <!--  -->
    <view>
      <uni-tag class="tag" mark text="HBuilder" type="primary"></uni-tag>
    </view>
    <text v-for="(item, index) in hbuilderText" :key="index" class="line">
      {{ item }}
    </text>
    <!--  -->
    <view>
      <uni-tag class="tag" mark text="VSCode" type="primary"></uni-tag>
    </view>
    <text v-for="(item, index) in vscodeText" :key="index" class="line">
      {{ item }}
    </text>
    <!--  -->

    HBuilder 作为启动工具，VSCode 作为主要编辑器

    基础开发：VSCode

    发布前配置：HBuilder

    真机调试（外网）：HBuilder + iTunes + iTools + 微信开发者工具
  </view>
</template>

<script>
export default {
  data() {
    return {
      hbuilderText: [
        '官方出品，真机调试必备',
        '部分跨端配置方便',
        '插件不完善',
        '整体体验不佳'
      ],
      vscodeText: [
        '插件完善',
        '体验好',
        '没有uni特色代码提示'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
}

.line {
  display: block;
  padding: 20rpx;
}
</style>
