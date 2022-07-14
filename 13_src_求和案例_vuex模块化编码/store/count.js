// 第二步：
// 准备actions-用于响应组件中的动作
// 准备mutations-用于操作数据（即state）
// 准备state-用于存储数据
// 准备getters-用于对state中的数据进行加工

// 求和相关的配置
export default {
    namespaced: true, //开启命名空间
    actions: {
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
    },
    mutations: {
        PLUS(state, value) {
            console.log(state, value)
            state.sum += value
        },
        MINUS(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0, //当前的和
        school: '叮当',
        subject: 'Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}