<template>
     <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter='add'/>
  </div>
</template>

<script>
// nanoid 可生成全球唯一编码
// 引入nanoid库，该库是分别暴露，直接调用nanoid函数就能生成唯一的编码
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    props:['addTodo'],
    data(){
        return {
            title:''
        }
    },
    methods:{
        // 输入框输入内容 按下后，就能添加
        add(){
            // 校验用户输入的数据(只有用户不输入内容时才进入到该判断)--空字符的布尔值为false
            if(!this.title.trim()) return alert('输入内容不能为空')
            // 需要把用户输入的内容，包装成一个todo对象
            const todoObj={id:nanoid(),title:this.title, done:false}
            // console.log('@@@'+ e.target.value);
            console.log(todoObj);
            // 子组件来调用该函数，并把刚生成的数据通过函数的传参方式传递给父组件(即通知App组件去添加一个todo对象)
            this.addTodo(todoObj)
            // 数据添加到list后，将输入框清空
            this.title = ''
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>