<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" :appear="true">
        <h2 v-show="!isShow" key="1">good afternoon</h2>
        <h2 v-show="isShow" key="2">good morning</h2>
        </transition-group>
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
        /* transition: 1s linear; */
    }
    /* 过渡方式实现 */

    /* 进入的起点 */
    .hello-enter{
        transform: translateX(-100%);
    }
    /* 进入的终点 */
    .hello-enter-to{
        transform: translateX(0);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 1s linear;
    }
    /* 离开的起点 */
    .hello-leave{
        transform: translateX(0);
    }
    /* 离开的终点 */
    .hello-leave-to{
        transform: translateX(-100%);
    }

</style>