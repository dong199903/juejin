<template>
  <el-dropdown @command.prevent="handleCommand" >
    <span class="el-dropdown-link">
      <el-avatar>
        <img src="../../assets/头像.jpg" alt />
      </el-avatar>
    </span>
    <template #dropdown >
      <el-dropdown-menu class="menu">
        <el-dropdown-item icon="el-icon-edit" command="/editor"> 写文章 </el-dropdown-item>
        <el-dropdown-item icon="el-icon-document"> 草稿箱 </el-dropdown-item>
        <el-divider></el-divider>
        <el-dropdown-item icon="el-icon-user">我的主页</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-promotion">我赞过的</el-dropdown-item>
        <el-dropdown-item icon="el-icon-reading">我的课程 </el-dropdown-item>
        <el-dropdown-item icon="el-icon-postcard">我的优惠券 </el-dropdown-item>
        <el-dropdown-item icon="el-icon-star-off">我的收藏</el-dropdown-item>
        <el-dropdown-item icon="el-icon-date">签到赢好礼 </el-dropdown-item>
        <el-dropdown-item icon="el-icon-collection-tag">标签管理 </el-dropdown-item>
        <el-dropdown-item icon="el-icon-view">浏览记录</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-flag">我的报名</el-dropdown-item>
        <el-divider></el-divider>
        <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-question">关于</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.prevent="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>

import router from "@/router/index"
import {del} from "@/utils/storage"


const logout = () => {
  console.log("quit")
  // ElMessageBox.confirm('确认要退出登陆吗?', '警告', {
  //   confirmButtonText: '确认',
  //   cancelButtonText: '取消',
  //   type: 'warning'
  // })
  //   .then(() => {
  //     del("token")
  //     ElMessage({
  //       type: 'success',
  //       message: '退出成功'
  //     })
  //     setTimeout(() => {
  //       router.push("/otherlogin")
  //     }, 1500);
  //   })
  //   .catch(() => {
  //     ElMessage({
  //       type: 'info',
  //       message: '已取消'
  //     })
  //   })
}
// const handleCommand = (command) => {
//   if (command === '/editor') {
//     router.push('/editor')
//   }
// }
</script>

<style scoped>
:deep(.el-dropdown-menu__item) {
  height: 30px;
  white-space: nowrap;
}
.menu{
  top: 42px !important;
}
</style>
