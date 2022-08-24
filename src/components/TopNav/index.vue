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
                        mode="horizontal" router>
                        <template v-for="(menu, index) in menuList">
                            <el-menu-item :key="menu.id" :index="menu.path" v-if="menu">
                                {{ menu.title }}
                            </el-menu-item>
                        </template>
                        <el-menu-item>
                            <a href="https://juejin.cn/app?utm_source=jj_nav">
                                APP
                            </a>
                        </el-menu-item>
                        <el-menu-item>
                            <a href="https://juejin.cn/extension?utm_source=jj_nav">
                                插件
                            </a>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <!-- 其余部分 -->
            <el-col :span="8">
                <div class="layout-header">
                    <!-- 搜索框 -->
                    <div class="search">
                        <el-autocomplete v-model="keyword" split-button size="medium" suffix-icon="el-icon-search"
                            placeholder="探索稀土掘金" value-key="title" :fetch-suggestions="querySearch"
                            :popper-append-to-body="false" popper-class="search-his" @select="handleSelect"
                            @keyup.native.enter='setIntoStorage($event)'>
                            <template slot-scope="{ item }">
                                <div v-if="item.id === 1" class="search-nav" id="searchhis">
                                    <span class="search-title">{{ item.title }}</span>
                                    <span class="search-button" @click="empty">{{ item.hisbutton }}</span>
                                </div>
                            </template>
                        </el-autocomplete>
                    </div>
                    <!-- 创作者中心 -->
                    <div class="creation">
                        <el-dropdown split-button type="primary" trigger="click" size="medium">
                            创作者中心
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item icon="el-icon-edit">
                                        <router-link to="/editor" tag="span">写文章</router-link>
                                    </el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-edit-outline"> 发沸点 </el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-s-platform"> 写代码 </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                    <!-- 会员 -->
                    <div class="stickysth">
                        <a href="#" underline="none" class="vipimg">
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
import { nanoid } from 'nanoid'
const menuList = [
    {
        title: '首页',
        id: 1,
        path: '/'
    },
    {
        title: '课程',
        id: 2,
        path: '/course'
    },
    {
        title: '商城',
        id: 3,
        path: '/shop'
    },
]
export default {
    name: "",
    components: { Avatar },
    data() {
        return {
            keyword: '',                   //接收搜索框输入的数据
            menuList,                      //菜单列表
            activeIndex: this.$route.path, //当菜单为路由模式时,激活菜单的路径
            filHistory: [],                //搜索查询结果
            //定义一个存放历史搜索记录的数组
            searchHistory: JSON.parse(localStorage.getItem('SearchHistory')) || [],
        };
    },
    methods: {
        querySearch(queryString, cb) {
            var searchHistory = this.searchHistory.slice(0, 6);
            //根据输入的值与历史搜索的数组进行匹配
            var results = queryString ? searchHistory.filter(this.createFilter(queryString)) : searchHistory;
            if (results.length != 0) {
                results.unshift({ id: 1, title: '搜索历史', hisbutton: '清除' })
            }
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (searchHistory) => {
                return (searchHistory.title.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        //点击历史搜索的数据，获取到点击的数据
        handleSelect(item) {
            console.log(item);
            if (item.id === 1) {
                console.log("点击到搜索历史了");
                this.keyword = "";
            }
            //点击历史搜索，跳转搜索结果页
            this.$router.push({
                name: "Search",
                params: {
                    query: this.keyword,
                },
            }).catch(err => { });
        },
        //回车，点击事件，此处应查询与输入匹配的title
        setIntoStorage(event) {
            if (event) {
                event.target.blur();
            }
            if (!this.keyword.trim()) return alert('请输入搜索内容');
            //判断搜索历史是否存在
            let exist = this.searchHistory.filter(item => {
                return item.title === this.keyword;
            }).length === 0 ? false : true;
            if (!exist) {
                //将用户的输入包装成一个histroyObj对象
                const histroyObj = { id: nanoid(), title: this.keyword }
                this.searchHistory.unshift(histroyObj)
                console.log(this.searchHistory);
                localStorage.setItem('SearchHistory', JSON.stringify(this.searchHistory))
            }
            //跳转到搜索结果页
            this.$router.push({
                name: "Search",
                params: {
                    query: this.keyword,
                },
            }).catch(err => console.log(err));
        },
        //清空历史搜索记录
        empty() {
            localStorage.removeItem('SearchHistory');
            this.searchHistory = [];
        }
    },
    watch: {
    },
    mounted() {
    }
}
</script>

<style scoped>
/* 整体顶部导航栏 */
.nav {
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    display: block;
    background-color: #fff;
    border: none;
    white-space: nowrap;
}

/* 布局控制导航栏溢出时强制为一行 */
.el-row {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: #F4F5F5 1.5px solid;
}

/* 作用于导航栏 */
.layout-header {
    display: flex;
    float: left;
    align-items: center;
    text-align: center;
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
    border: none !important;
    display: flex;
    flex-wrap: nowrap;
}

/* 一级菜单 */
.el-menu-item {
    padding-left: 11px;
    padding-right: 11px;
    text-decoration: none;
    border: none;
    color: #333 !important;
}

/* 去掉选中el-menu-item时的下划线 这样设置下划线不会跳一下*/
.el-menu--horizontal>.el-menu-item {
    border-bottom: none !important;
}

/* 菜单激活时 */
.el-menu--horizontal>.el-menu-item.is-active {
    /* background: #fff; */
    border-bottom: none !important;
}

/* 菜单鼠标悬停时 */
.el-menu-item:hover {
    border-bottom: #1787FB solid 2px !important;
}

.el-menu-item>a {
    /* 设置为块元素 */
    display: block;
    /* 设置垂直居中 */
    line-height: 58px;
}

/* 搜索框 */
.search {
    margin-left: 30px;
}

.el-autocomplete {
    width: 170px;
    height: 35px;
    transition: all 0.2s ease-in-out;

}

.el-autocomplete:focus-within {
    width: 330px !important;
}

:deep(.el-popper) {
    width: 330px !important;
}

:deep(.el-autocomplete-suggestion li) {
    font-size: 12px;
    text-align: left;
}

::v-deep.el-autocomplete .search-his .search-nav {
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: #F4F5F5 1.5px solid;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

::v-deep.el-autocomplete .search-his .search-nav .search-title {
    margin-left: 20px;
    color: #869aab;
}

::v-deep.el-autocomplete .search-his .search-nav .search-button {
    margin-right: 20px;
    color: #1e80ff;
}

::v-deep.el-autocomplete .el-autocomplete-suggestion__wrap {
    margin-top: 25px !important;
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
    right: 110px;

}

a {
    /* 下划线去除 */
    text-decoration: none;
}

/* 会员 */
.vipimg {
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: gray;
    font-size: 14px;
}

.login {
    position: absolute;
    right: 35px;
}

/* 消息容器 */
.messagebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
}

/* 消息图标 */
.elLink {
    font-size: 19px;
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
