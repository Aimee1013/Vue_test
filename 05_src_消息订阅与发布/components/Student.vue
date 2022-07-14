<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名传给school组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Student',
    data(){
        return {
            name: 'billy',
            sex: 'male'
        }
    },
    mounted(){
        console.log('Student', this.$bus)
    },
    methods: {
        sendStudentName(){
            // this.$bus.$emit('good', this.name)

            // 发布消息
            pubsub.publish('hello', 999)
        }
    }
}
</script>

<style scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>