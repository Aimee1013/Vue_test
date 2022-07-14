<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" :appear="true">
        <h2 v-show="isShow">good afternoon</h2>
        </transition>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Test',
    data(){
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
    h2 {
        background-color: aquamarine;
    }
    
    /* 动画方式实现 */
    
    .hello-enter-active{
        animation: goodDay 2s;
    }
    .hello-leave-active{
        animation: goodDay 2s reverse;
    }

    @keyframes goodDay {
        from {
            transform: translateX(-100%)
            }
        to {
            transform: translateX(0px)
            }
    }
</style>