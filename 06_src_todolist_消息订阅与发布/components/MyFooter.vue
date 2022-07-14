<template>
    <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked='isAll' @change='checkAll' />
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAllDone" >清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos', 'checkAllTodo', 'clearAllDoneTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        // 1.用reduce方法来统计已勾选数量
        // return this.todos.reduce((pre, todo)=> pre + (todo.done ? 1 : 0), 0)

        // 2.用forEach方法来统计已勾选数量
        let i = 0
        this.todos.forEach(todo => {
          if(todo.done){
            i++
          }
        })
        return i
      },
      isAll(){
        return this.doneTotal === this.total && this.total >0
      }
    },
    methods:{
      // 通过操作点击事件checkAll，通知App组件是否要全选 或 取消全选 todo对象（App组件操作完之后，子组件只需要调用一下父组件操作的函数）
      checkAll(e){
        this.checkAllTodo(e.target.checked)
      },
      // 通过操作点击事件clearAllDone，通知App组件清除所有已完成的todo对象（App组件操作完之后，子组件只需要调用一下父组件操作的函数）
      clearAllDone(){
        if(confirm('你确定要删除吗？')){
          this.clearAllDoneTodo()
        }
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
  color: aliceblue;
  background-color: rgb(218, 81, 81);
}
</style>