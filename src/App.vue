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
  background-color: #f8f8f8;
  padding-top: 20rpx;
}

.uni-tag {
  display: inline-flex !important;
}
</style>
