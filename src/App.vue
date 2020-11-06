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
  // min-height: 100%;
}

.uni-tag {
  display: inline-flex !important;
}
.uni-section {
  background-color: #f1f1f1 !important;
}
.uni-section__head-tag {
  background-color: #007aff !important;
}

//

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

.img-wrapper {
  padding: 0 30rpx;
  image {
    width: 100%;
  }
}

.cell-group {
  margin: 20rpx 0;
}

</style>
