import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

// 第一种方法
// // 创建一个组件
// const Demo = Vue.extend({})
//     // 创建一个组件实例对象
// const d = new Demo()

// Vue.prototype.x = d

new Vue({
    el: '#app',
    render: h => h(App),
    // 第二种方法：(vm创建之前，在其上增加一个x，该x值即当前的vm)
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
})