// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 完整引入ElementUI
// 引入ElementUI组件库
// import ElementUI from 'element-ui';

// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入ElementUI
import { Button, Row, DatePicker } from 'element-ui';

// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用ElementUI插件(所有组件都会被应用，导致前端代码文件过大，一般不用该方式来应用)
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);




// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})