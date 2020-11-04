<template>
  <view class="home">
    <view class="logo-wrapper">
      <image class="logo" src="@/static/logo.png"></image>
    </view>
    <uni-grid :column="3" @change="handleGridTap">
      <uni-grid-item v-for="(item, index) in topicList" :key="index" :index="index">
        <view class="box">
          <text>{{ item.title }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      topicList: [
        { title: '框架对比', url: '/pages/compare/Compare' },
        { title: 'uni简介', url: '/pages/introduction/Introduction' },
        { title: '开发工具', url: '/pages/devTools/DevTools' },
        { title: '新建项目', url: '/pages/newProject/NewProject' },
        { title: '开发准备' }
      ]
    }
  },
  methods: {
    handleGridTap({ detail }) {
      const index = detail.index
      console.log(index)
      uni.navigateTo({
        url: this.topicList[index].url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 0 40rpx;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    padding: 60rpx 0;
    .logo {
      width: 200rpx;
      height: 200rpx;
    }
  }

  .box {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
