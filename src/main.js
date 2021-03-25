import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VTooltip from 'v-tooltip'
import VueHotkey from 'v-hotkey'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(VTooltip)
Vue.use(VueHotkey)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
