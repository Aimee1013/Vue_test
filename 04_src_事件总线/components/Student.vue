<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名传给school组件</button>
    </div>
</template>

<script>
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
            this.$bus.$emit('good', this.name)
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