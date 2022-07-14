<template>
    <div>
     <h2>当前求和为：{{sum}}</h2>
     <h2>当前求和放大10倍为：{{bigSum}}</h2>
     <h2>我在{{school}}学{{subject}}</h2>
     <h2 style="color:red">Person组件的总人数是：{{personList.length}}</h2>
     <select v-model.number='num'>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
    </select> 
    <!-- <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button> -->
    <button @click="PLUS(num)">+</button>
    <button @click="MINUS(num)">-</button>
    <!-- <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button> -->
    <button @click="plusOdd(num)">当前求和为奇数再加</button>
    <button @click="waitPlus(num)">等一等再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations,mapActions} from 'vuex'

export default {
    name: 'Count',
    data(){
        return {
            num:1,  //用户选择的数字
        }
    },
    computed:{
        // 扩展运算符... （在对象中输出对象数据）  扩展运算符能将数组或对象转换为逗号分隔的参数序列
        // 1.借助mapState生成计算属性，从state中读取数据 （对象写法）
        // ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}),

        // 2.借助mapState生成计算属性，从state中读取数据 （数组写法）
        ...mapState(['sum', 'school', 'subject', 'personList']),


        // 1.借助mapGetters生成计算属性，从getters中读取数据 （对象写法）
        // ...mapGetters({dahe:'bigSum'}),

        // 1.借助mapGetters生成计算属性，从getters中读取数据 （数组写法）
        ...mapGetters(['bigSum']),

    },
    methods:{

        // 借助mapMutations生成对应的方法，方法中会调用commit去执行mutations（对象写法）
        // ...mapMutations({increment:'PLUS', decrement: 'MINUS'}),

         // 借助mapMutations生成对应的方法，方法中会调用commit去执行mutations（数组写法）
        ...mapMutations(['PLUS','MINUS']),


        // 借助mapActions生成对应的方法，方法中会调用dispatch去执行actions（对象写法）
        // ...mapActions({incrementOdd:'plusOdd', incrementWait: 'waitPlus'}),

         // 借助mapActions生成对应的方法，方法中会调用dispatch去执行actions（数组写法）
        ...mapActions(['plusOdd','waitPlus']),
    },
    mounted(){
        const x = mapState({he:'sum', xuexiao:'school', xueke:'subject'})
        console.log(x)
    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>