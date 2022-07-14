<template>
<div>   
  <ul class="todo-main">
      <!-- 遍历数组，然后把数据传给子组件,子组件通过props配置项接收-->
  <My-Item v-for="todoObj in todos" :key='todoObj.id' :todo='todoObj' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
  </ul> 
</div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name:'MyList',
    components:{MyItem},
    props:['todos','checkTodo','deleteTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>