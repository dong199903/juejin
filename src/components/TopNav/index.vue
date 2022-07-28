<template>
    <div class="nav">
        <el-row justify="center">
            <el-col :span="2.3">
                <div class="layout-header">
                    <a href="/" class="logo">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                            alt="稀土掘金" class="logo-img" />
                    </a>

                </div>
            </el-col>
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
            <el-col :span="8">
                <div class="layout-header">
                    <div class="search">
                        <el-input v-model="keyword" split-button suffix-icon="el-icon-search" placeholder="搜索稀土掘金"
                            size="medium">
                        </el-input>
                    </div>
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
                    <div class="stickysth">
                        <a href="#" class="vipimg">
                            <img data-v-b569322c=""
                                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                                alt="vip" class="vip-img">
                            <div class="vip-words">会员</div>
                        </a>
                    </div>
                    <div class="login">
                        <!-- <div>
                            <el-button size="medium" type="primary" plain @click="handleClickLogin">登录</el-button>
                        </div> -->
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
            keyword: '',
            menuList,
            activeIndex: this.$route.path
        };
    },
    components: { Avatar, Avatar }
}
</script>

<style scoped>
.search {
    margin-left: 30px;
}

.el-input /deep/ .el-input__inner {
    width: 170px;
    height: 35px;
    transition: all 0.3s ease-in-out !important;
}

.login {
    position: absolute;
    right: 35px;
}

.el-input /deep/ .el-input__inner:focus {
    width: 330px;
}

.nav {
    background-color: #fff;
    border: none;
    white-space: nowrap;
}

.stickysth {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 120px;
}

.vipimg {
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: gray;
    font-size: 14px;
}

.el-menu--horizontal {
    height: 100%;
    border: 0;
    border: none;
}

.el-menu {
    display: flex;
    flex-wrap: nowrap;
}

.el-col {
    display: flex;
    flex-wrap: nowrap;
}

.el-row {
    display: flex;
    flex-wrap: nowrap;
}

.layout-header {
    display: flex;
    flex-wrap: nowrap !important;
    float: left;
    align-items: center;
    height: 60px;
    background-color: #fff;
}

.creation {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}

.search:focus-within~.creation {
    display: none;
}

.logo {
    margin-right: 1rem;
    margin-left: 24px;
    display: inline-block;
    height: 22px;
    width: auto;
}

a {
    text-decoration: none;
    cursor: pointer;
}

.logo-img {
    display: block;
    width: 107px;
    height: 22px;
}

.el-menu-item.is-active {
    background: #fff;
    border-bottom: none !important;
}

.el-menu-item:hover {
    border-bottom: #1787FB solid 2px !important;
}

/* 深选择器 */
.el-submenu :deep(.el-submenu__title:hover) {
    color: #1787FB !important;
}

.el-submenu :deep(.el-submenu__title) {
    color: #333 !important;
}

/* 未生效 */
.el-submenu :deep(.el-menu-item:hover) {
    color: #1787FB !important;
    border-bottom: none !important;
}

.el-menu-item {
    padding-left: 11px;
    padding-right: 11px;
    display: inline-block;
    white-space: nowrap;
    border-bottom: none;
    text-decoration: none;
    border: none;
    color: #333 !important;
}

.messagebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
}

.elLink {
    font-size: 25px;
    margin-right: 10px;
}

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

.avatarpic:deep(.navbar-item) {
    display: inline-block;
    font-size: 22px;
    color: #5a5e66;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
