import Vue from 'vue'
import App from './App'

import * as filter from 'utils/filter.js'

Vue.config.productionTip = false

App.mpType = 'app'

for (const key in filter) {
  Vue.filter(key, filter[key])
}

const app = new Vue({
  ...App
})
app.$mount()
