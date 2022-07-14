// 第二步：
// 准备actions-用于响应组件中的动作
// 准备mutations-用于操作数据（即state）
// 准备state-用于存储数据
// 准备getters-用于对state中的数据进行加工

// 人员管理相关的配置
// import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                Response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: Response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '01', name: 'billy' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}