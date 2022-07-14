// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'

// 第一步：
// 引入Vuex
import Vuex from 'vuex'

// 使用vuex插件
Vue.use(Vuex)

// 第二步：
// 准备actions-用于响应组件中的动作
const actions = {
        // plus(context, value) {
        //     console.log(context, value)
        //     context.commit('PLUS', value)
        // },
        // minus(context, value) {
        //     context.commit('MINUS', value)
        // },
        plusOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('PLUS', value)
            }
        },
        waitPlus(context, value) {
            setTimeout(() => {
                context.commit('PLUS', value)
            }, 500);
        }
    }
    // 准备mutations-用于操作数据（即state）
const mutations = {
        PLUS(state, value) {
            console.log(state, value)
            state.sum += value
        },
        MINUS(state, value) {
            state.sum -= value
        }
    }
    // 准备state-用于存储数据
const state = {
    sum: 0, //当前的和
    school: '叮当',
    subject: 'Vue'
}

// 准备getters-用于对state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}




// 第三步：
// 创建并保留/导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})