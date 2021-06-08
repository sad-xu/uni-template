import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import mixin from '@/utils/mixin'

// #ifdef H5
import env from 'zrender/lib/core/env'
env.domSupported = true
// #endif

Vue.config.productionTip = false

Vue.use(uView)
Vue.mixin(mixin)

App.mpType = 'app'

// 路由跳转，自动回到顶部
const originNavigateTo = uni.navigateTo
uni.navigateTo = function(params) {
  const successFn = function() {
    // #ifdef H5
    uni.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
    // #endif
    if (params.success) params.success()
  }
  originNavigateTo({
    ...params,
    success: successFn
  })
}

const app = new Vue(App)
app.$mount()
