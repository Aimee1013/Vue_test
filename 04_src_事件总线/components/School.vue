<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
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
        this.$bus.$on('good',(data)=>{
            console.log('this is scholl 组件, got the data:', data)
        })
    },
    beforeDestroy(){
        // 不用时，把事件总线上的good事件销毁
        this.$bus.$off('good')
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