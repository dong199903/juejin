<template>
    <div class="nav">
        <el-row justify="center">
            <!-- logo -->
            <el-col :span="2.3">
                <div class="layout-header">
                    <a href="/" class="logo">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                            alt="稀土掘金" class="logo-img" />
                    </a>

                </div>
            </el-col>
            <!-- 菜单 -->
            <el-col :span="11">
                <div class="layout-header">
                    <el-menu active-text-color="#1787FB !important" :default-active="activeIndex" :ellipsis="false"
                        mode="horizontal">
                        <template v-for="(menu, index) in menuList">
                            <el-menu-item :key="menu.id" :index="menu.path" v-if="!menu.children"> {{ menu.title }}
                            </el-menu-item>
                            <el-submenu v-if="menu.children" :index="menu.path" :key="menu.id">
                                <template #title>{{ menu.title }}</template>
                                <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path">
                                    <template #title>{{ item.title }}</template>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </el-menu>
                </div>
            </el-col>
            <!-- 其余部分 -->
            <el-col :span="8">
                <div class="layout-header">
                    <!-- 搜索框 -->
                    <div class="search">
                        <el-input v-model="keyword" split-button suffix-icon="el-icon-search" placeholder="搜索稀土掘金"
                            size="medium">
                        </el-input>
                    </div>
                    <!-- 创作者中心 -->
                    <div class="creation">
                        <el-dropdown split-button type="primary" trigger="click" size="medium">
                            创作者中心
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item icon="el-icon-edit">写文章</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-edit-outline"> 发沸点 </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                    <!-- 会员 -->
                    <div class="stickysth">
                        <a href="#" class="vipimg">
                            <img data-v-b569322c=""
                                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                                alt="vip" class="vip-img">
                            <div class="vip-words">会员</div>
                        </a>
                    </div>
                    <!-- 登录或消息头像,此处应做判断 -->
                    <div class="login">
                        <!-- 登录 -->
                        <!-- <div>
                            <el-button size="medium" type="primary" plain @click="handleClickLogin">登录</el-button>
                        </div> -->
                        <!-- 消息和头像 -->
                        <div class="messagebox">
                            <el-link class="elLink" :underline="false" icon="el-icon-message-solid"></el-link>
                            <div class="avatarpic">
                                <Avatar class="navbar-item"></Avatar>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Avatar from '../Avatar/index.vue'
const menuList = [
    {
        title: '首页',
        id: 1,
        path: '/'
    },
    {
        title: '沸点',
        id: 2,
        path: '/2'
    },
    {
        title: '课程',
        id: 3,
        path: '/3'
    },
    {
        title: '直播',
        id: 4,
        path: '/4'
    },
    {
        title: '资讯',
        id: 5,
        path: '/5'
    },
    {
        title: '活动',
        id: 6,
        path: '/6'
    },
    {
        title: '开放社区',
        id: 7,
        path: '/7',
        children: [
            {
                title: '青训营社区',
                id: 11,
                path: '/11'
            }
        ]
    },
    {
        title: '商城',
        id: 8,
        path: '/8'
    },
    {
        title: 'APP',
        id: 9,
        path: '/9'
    },
    {
        title: '插件',
        id: 10,
        path: '/10'
    }
]
export default {
    name: "",
    data() {
        return {
            keyword: '',     //接收搜索框输入的数据
            menuList,        //菜单列表
            activeIndex: this.$route.path //当菜单为路由模式时,激活菜单的路径
        };
    },
    components: { Avatar }
}
</script>

<style scoped>
/* 整体顶部导航栏 */
.nav {
    background-color: #fff;
    border: none;
    white-space: nowrap;
}

/* 布局控制导航栏溢出时强制为一行 */
.el-row {
    display: flex;
    flex-wrap: nowrap;
}

/* 作用于整个导航栏 */
.layout-header {
    display: flex;
    float: left;
    align-items: center;
    height: 60px;
    background-color: #fff;
}

/* logo */
.logo {
    margin-right: 1rem;
    margin-left: 24px;
    display: inline-block;
    height: 22px;
    width: auto;
    text-decoration: none;
    cursor: pointer;
}

/* logo图片 */
.logo-img {
    display: block;
    width: 107px;
    height: 22px;
}

/* 导航栏菜单部分 */
.el-menu--horizontal {
    height: 100%;
    border: 0;
    border: none;
    display: flex;
    flex-wrap: nowrap;
}


/* 菜单激活时 */
.el-menu-item.is-active {
    background: #fff;
    border-bottom: none !important;
}

/* 菜单鼠标悬停时 */
.el-menu-item:hover {
    border-bottom: #1787FB solid 2px !important;
}

/* 深选择器，有二级菜单的一级菜单鼠标悬停 */
.el-submenu :deep(.el-submenu__title:hover) {
    color: #1787FB !important;
}

/* 有二级菜单的一级菜单 */
.el-submenu :deep(.el-submenu__title) {
    color: #333 !important;
}

/* 未生效 */
.el-submenu :deep(.el-menu-item:hover) {
    color: #1787FB !important;
    border-bottom: none !important;
}

/* 一级菜单 */
.el-menu-item {
    padding-left: 11px;
    padding-right: 11px;
    border-bottom: none;
    text-decoration: none;
    border: none;
    color: #333 !important;
}

/* 搜索框 */
.search {
    margin-left: 30px;
}

/* 输入框 深选择器*/
.el-input :deep(.el-input__inner) {
    width: 170px;
    height: 35px;
    transition: all 0.3s ease-in-out !important;
}

.el-input :deep(.el-input__inner:focus) {
    width: 330px;
}

/* 搜索框聚焦时，创作者中心不显示 */
.search:focus-within~.creation {
    display: none;
}

/* 创作者中心 */
.creation {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}

/* 会员 */
.stickysth {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 120px;
}

/* 会员 */
.vipimg {
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: gray;
    font-size: 14px;
}

/* 登录按钮 */
.login {
    position: absolute;
    right: 35px;
}

/* 消息容器 */
.messagebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
}

/* 消息图标 */
.elLink {
    font-size: 25px;
    margin-right: 10px;
}

/* 头像 */
.avatarpic {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
}

/* 头像 */
.avatarpic:deep(.navbar-item) {
    display: flex;
    font-size: 22px;
    color: #5a5e66;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
