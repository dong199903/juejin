<template>
    <div class="stiky-menu">
        <div class="menu-container">
            <div class="subwrapper submenu">
                <ul>
                    <li><a href="#">综合</a></li>
                    <li><a href="#">文章</a></li>
                    <li><a href="#">课程</a></li>
                    <li><a href="#">标签</a></li>
                    <li><a href="#">用户</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script setup>
</script>

<style scoped>
.sticky-menu {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.subwrapper {
    width: 960px;
    margin: 0 auto;
}

.menu-container {
    height: 46px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: #F4F5F5 1.5px solid;

}

.submenu {
    display: flex;
    justify-content: space-between !important;
    align-items: center;
}

ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
}

li {
    display: flex;
    flex-wrap: nowrap;
    margin-right: 40px;
}

a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
}

a:hover,
a:active {
    color: #1787FB;
}


ul .backend a:hover~.hover-menu {
    opacity: 1;
    display: block;
}

</style>
