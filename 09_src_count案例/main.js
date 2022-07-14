import Vue from 'vue'

import App from './App.vue'

// 引入vuex
import Vuex from 'vuex'

Vue.config.productionTip = false

// 使用vuex
Vue.use(Vuex)


new Vue({
    el: '#app',
    render: h => h(App),
})