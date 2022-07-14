<template>
  <div>
   <My-Header  :addTodo='addTodo'/>
   <My-List :todos='todos' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
   <My-Footer :todos='todos' :checkAllTodo='checkAllTodo' :clearAllDoneTodo='clearAllDoneTodo' />
  </div>
</template>

<script>
// 引入组件
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'


export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
    data(){
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []   //json.parse()将字符串转换成一个对象
        }
    },
    methods:{
      // 添加一个todo对象
      // 如何把子组件的数据传给父组件（在父组件中添加一个函数，子组件来调用该函数，把数据通过函数的传参方式传递给父组件，父组件收到参数后，可以把数据插入到数组中）
      addTodo(todoObj){//该函数要与使用它的子组件绑定
        this.todos.unshift(todoObj)  
      },
      // 勾选 或 取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id){//表示 如果MyItem中改变勾选状态的id 与 App中数据里的id 相等，就把状态取反，取反的状态先传给子组件MyList，再通过子组件MyList把状态会传给孙组件MyItem
            todo.done = !todo.done
          }
        })
      },
      // 删除某个todo对象
      deleteTodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      // 全选 或 取消全选 todo对象
      checkAllTodo(done){
        this.todos.forEach(todo => {
          todo.done = done
        })
      },
      // 清除所有已完成的todo对象
      clearAllDoneTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done  //把没有完成的todo对象返回给todos数组
        })
      }
    },
    // 用watch监视方法，把收到的最新数据存储到本地  --  localStorage
    watch:{
      todos:{
        deep:true,
        handler(newValue){  // JSON.stringify(newValue) 需要先将数组中的新对象转换为JSON字符串，然后存入本地
        localStorage.setItem('todos', JSON.stringify(newValue))
         }
      }
    }
}
</script>

<style>

</style>
