// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'

// 第一步：
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

// 使用vuex插件
Vue.use(Vuex)


// 第三步：
// 创建并保留/导出store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})