<template>
    <ul>
        <li :style="{opacity}">welcome to learn Vue</li>
        <li>news01 <input type="text"></li>
        <li>news02 <input type="text"></li>
        <li>news03 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return {
            opacity:1,
        }
    },
    // mounted(){
    //     this.timer = setInterval(()=>{
    //         this.opacity -= 0.01
    //         if(this.opacity <= 0){
    //             this.opacity = 1
    //         }
    //     }, 16)
    // },
    // beforeDestroy(){
    //     clearInterval(this.timer)
    // },
    activated(){ //激活
        this.timer = setInterval(()=>{
            this.opacity -= 0.01
            if(this.opacity <= 0){
                this.opacity = 1
            }
        }, 16)
    },
    deactivated(){//失活
        clearInterval(this.timer)
    }
}
</script>