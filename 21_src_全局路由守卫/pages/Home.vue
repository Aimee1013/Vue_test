<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link to="/home/news" class="list-goup-item" active-class="active">News</router-link>
                </li>
                 <li>
                    <router-link to="/home/message" class="list-goup-item" active-class="active">Message</router-link>
                </li>
            </ul>
            <!-- 缓存一个路由组件 include="组件名" -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>

            <!-- 缓存多个路由组件 include="['组件名1', '组件名2']" -->
            <!-- <keep-alive :include="['News', 'Message']">
                <router-view></router-view>
            </keep-alive> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>