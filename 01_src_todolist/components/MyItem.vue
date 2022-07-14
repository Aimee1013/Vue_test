<template>
    <li>
    <label>
      <input type="checkbox" :checked='todo.done' @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
      <!-- <input type="text"> -->
    </label>
    <button class="btn btn-danger" @click='handleDelete(todo.id)'>删除</button>
    <button class="btn btn-edit">编辑</button>
  </li> 
</template>

<script>
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
          this.deleteTodo(id)
        }
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
</style>