<template>
    <div>
     <!-- <h2>当前求和为：{{he}}</h2>  -->
     <h2>当前求和为：{{sum}}</h2>
     <!-- <h2>当前求和放大10倍为：{{dahe}}</h2>  -->
     <h2>当前求和放大10倍为：{{bigSum}}</h2>
     <!-- <h2>我在{{xuexiao}}学{{xueke}}</h2>  -->
     <h2>我在{{school}}学{{subject}}</h2>
     <select v-model.number='num'>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
    </select> 
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'Count',
    data(){
        return {
            num:1,  //用户选择的数字
        }
    },
    computed:{
        // 自己亲自去写计算属性
        // he(){
        //     return this.$store.state.sum
        // },
        // xuexiao(){
        //     return this.$store.state.school
        // },
        // xueke(){
        //     return this.$store.state.subject
        // },

        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        // 扩展运算符... （在对象中输出对象数据）  扩展运算符能将数组或对象转换为逗号分隔的参数序列
        // 1.借助mapState生成计算属性，从state中读取数据 （对象写法）
        // ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}),

        // 2.借助mapState生成计算属性，从state中读取数据 （数组写法）
        ...mapState(['sum', 'school', 'subject']),


        // dahe(){
        //     return this.$store.getters.bigSum
        // },

        // 1.借助mapGetters生成计算属性，从getters中读取数据 （对象写法）
        // ...mapGetters({dahe:'bigSum'}),

        // 1.借助mapGetters生成计算属性，从getters中读取数据 （数组写法）
        ...mapGetters(['bigSum']),

    },
    methods:{
        increment(){
            this.$store.commit('PLUS', this.num)
        },
        decrement(){
            this.$store.commit('MINUS', this.num)
        },
        incrementOdd(){
            this.$store.dispatch('plusOdd', this.num)
        },
        incrementWait(){
            this.$store.dispatch('waitPlus', this.num)
        }
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