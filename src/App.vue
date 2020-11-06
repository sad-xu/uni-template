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

.line-title {
  display: block;
  padding: 20rpx;
  font-weight: bold;
  font-size: 32rpx;
}

.line-text {
  display: block;
  padding: 20rpx;
}
.line-code {
  display: block;
  font-size: 24rpx;
  font-style: italic;
  padding: 10rpx 10rpx 10rpx 20rpx;
  word-break: break-all;
  color: #999;
}
</style>
