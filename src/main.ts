import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueIpfs from './plugins/vue-ipfs'

import VueI18n from 'vue-i18n'

// Load our IPFS plugin.
// Vue.use(VueIpfs)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('@/i18n/zh.json'),
    'en': require('@/i18n/en.json')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
