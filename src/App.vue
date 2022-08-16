<script>
import errTracker from './utils/errTracker'

export default {
  onLaunch() {
    console.log('App Launch')
    // #ifdef H5
    window.addEventListener('unhandledrejection', (e) => {
      errTracker.uploadErr(e)
    })
    // #endif
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
    // #ifndef H5
    errTracker.uploadErr(err)
    // #endif
  },
  onPageNotFound(route) {
    errTracker.uploadErr(
      '404',
      new Error(`404:${route.path}-${JSON.stringify(route.query)}`)
    )
  },
  globalData: {}
}
</script>

<style lang="scss">
// uview 基础样式
@import 'uview-ui/index.scss';

body,
html {
  user-select: initial;
}

page {
  font-size: 38rpx;
  background-color: #00000a;
  color: #f3f6f9;
  word-break: break-all;
}

.ec-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
