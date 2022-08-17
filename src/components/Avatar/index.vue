<template>
  <div>
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar>
        <img src="../../assets/头像.jpg" alt />
      </el-avatar>
    </span>
    <template #dropdown >
      <el-dropdown-menu class="menu" >
        <el-dropdown-item icon="el-icon-edit" > <router-link to="/editor" tag="span">写文章</router-link> </el-dropdown-item>
        <el-dropdown-item icon="el-icon-user">我的主页</el-dropdown-item>
        <el-divider></el-divider>
        
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
        <el-dropdown-item icon="el-icon-switch-button" ><span @click="logout">退出</span></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    <el-dialog
      title="退出登录"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>您确定退出登录？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="quit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
  
</template>

<script setup>
import { Message } from 'element-ui';
import router from "@/router/index"
import {del} from "@/utils/storage"
import {ref} from "vue"
const dialogVisible = ref(false)
const logout = () => {
  dialogVisible.value = true
}
const quit = () => {
  dialogVisible.value = false
  del("token")
  Message({
    type: 'success',
    message: '退出成功'
  })
  setTimeout(() => {
    router.push("/otherlogin")
  }, 1500);
    
}

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
