<template>
  <view>
    <web-view :src="pageUrl"></web-view>
  </view>
</template>

<script>
export default {
  onLoad(option) {
    this.pageUrl = option.url
    uni.setNavigationBarTitle({
      title: option.title
    })
  },
  data() {
    return {
      pageUrl: ''
    }
  }
}
</script>
