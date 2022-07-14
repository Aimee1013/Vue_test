<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__fadeInRightBig"
        :appear="true">
        <h2 v-show="!isShow" key="1">good afternoon</h2>
        <h2 v-show="isShow" key="2">good morning</h2>
        </transition-group>
    </div>
</template>

<script>
// 引入动画库
import 'animate.css'

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


</style>