<template>
    <transition name="todo" appear="">
    <li>
    <label>
      <input type="checkbox" :checked='todo.done' @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit" type="text" 
      :value="todo.title" 
      @blur="handleBlur(todo,$event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click='handleDelete(todo.id)'>删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
    </transition> 
</template>

<script>
// 引入消息订阅与发布
import pubsub from 'pubsub-js'

export default {
    name:'MyItem',
    props:['todo', 'checkTodo', 'deleteTodo'],
    methods:{
      // 勾选 或 取消勾选
      handleCheck(id){
        // 通过操作change事件，通知App组件将对应id的todo对象的done值取反
        this.checkTodo(id)
      },
      // 删除某个todo对象
      handleDelete(id){
        if(confirm('你确定删除吗？')) {
          // 通过操作点击事件handleDelete，通知App组件将对应id的todo对象删除
          // this.deleteTodo(id)

          // 发布消息
          pubsub.publish('deleteTodo', id)
        }
      },
      handleEdit(todo){
        // 判断todo有没有isEdit属性，有就直接编辑，没有就给todo加一个属性
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo, 'isEdit', true)
        }
        // 点击编辑自动获取焦点
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      // 失去焦点回调（真正执行修改操作）
      handleBlur(todo,e){
        todo.isEdit = false
        // 发布消息
        // console.log('updateTodo', todo.id, e.target.value)
          pubsub.publish('updateTodo', todo.id, e.target.value)
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
.todo-enter-active{
  animation: todo 0.5s linear;
}
.todo-leave-active{
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
/* 动画方式实现 */
    
    .todo-enter-active{
        animation: goodDay 2s;
    }
    .todo-leave-active{
        animation: goodDay 2s reverse;
    }

    @keyframes goodDay {
        from {
            transform: translateX(-100%)
            }
        to {
            transform: translateX(0px)
            }
    }
</style>