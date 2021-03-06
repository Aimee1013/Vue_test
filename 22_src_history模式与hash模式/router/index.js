// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '关于' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [{
                        name: 'xiangqing',
                        path: 'detail', //使用占位符声明接收params参数
                        component: Detail,
                        meta: { title: '详情' },
                        // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件(开发中用较少)
                        // props: { a: 1, b: 'billy' },

                        // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数以props的形式传给Detail组件
                        // props: true,

                        // props的第三种写法，值为函数
                        props($route) {
                            return { id: $route.query.id, title: $route.query.title }
                        }
                    }]
                }
            ]
        }
    ]
})

// 全局前置路由守卫---初始化的时候被调用，每次切换路由之前被调用
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) { //判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('the name of the school is wrong, you are not allow to check it')
        }
    } else {
        next()
    }
})


// 全局后置路由守卫---初始化的时候被调用，每次切换路由之后被调用
router.afterEach((to, from) => {
    document.title = to.matched.title || '系统'
})

export default router