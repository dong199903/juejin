<template>
    <el-menu class="el-menu-demo" :ellipsis="false" mode="horizontal" router>
        <template v-for="(menu, index) in menuList">
            <el-menu-item :key="menu.id" :index="menu.path" v-if="!menu.children"> {{ menu.title }}</el-menu-item>
            <el-submenu v-if="menu.children" :index="menu.path" :key="menu.id">
                <template #title>{{ menu.title }}</template>
                <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path">
                    <template #title>{{ item.title }}</template>
                </el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const menuList = ref([
    {
        title: '首页',
        id: 1,
        path: '/'
    },
    {
        title: '沸点',
        id: 2,
        path: '/'
    },
    {
        title: '课程',
        id: 3,
        path: '/'
    },
    {
        title: '直播',
        id: 4,
        path: '/'
    },
    {
        title: '资讯',
        id: 5,
        path: '/'
    },
    {
        title: '活动',
        id: 6,
        path: '/'
    },
    {
        title: '开放社区',
        id: 7,
        path: '/',
        children: [
            {
                title: '青训营社区',
                id: 11,
                path: '/'
            }
        ]
    },
    {
        title: '商城',
        id: 8,
        path: '/'
    },
    {
        title: 'APP',
        id: 9,
        path: '/'
    },
    {
        title: '插件',
        id: 10,
        path: '/'
    }
])
</script>

<style scoped>
</style>
