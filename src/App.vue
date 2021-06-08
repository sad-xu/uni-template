<script>

export default {
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  onError() {
    console.log('App Err')
  },
  onUnhandledRejection() {
    console.log('App UnhandledRejection')
  }
}
</script>

<style lang="scss">
// uview 基础样式
@import "uview-ui/index.scss";

page {
  background-color: #201178;
}

// 骨架屏定位
.afa-skeleton {
  position: relative;
}
</style>
