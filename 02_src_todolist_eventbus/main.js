// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件，负责管理其他所有组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 -- vm
new Vue({
    el: '#app',
    // 此行代码，表示将APP组件放入容器中
    render: h => h(App),
    // 完整版写法：
    /* render(createElement) {
        return createElement('h1', 'Good Evening!')
    } */
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})