<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'School',
    data(){
        return {
            name: 'SGU',
            address: 'perth'
        }
    },
    mounted(){
        // console.log('School', this.$bus)
        // this.$bus.$on('good',(data)=>{
        //     console.log('this is scholl 组件, got the data:', data)
        // 订阅消息
        this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
            console.log(this) // vue component
            console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
        })
    },
    beforeDestroy(){
        // 该组件不用时，把事件总线上的good事件销毁
        // this.$bus.$off('good')
        // 当该组件不用时，取消订阅（类似与取消定时器）
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>

</style>>
    .school {
        background-color: aquamarine;
        padding: 5px;
    }
</style>