<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
/* @import "@/assets/style/reset.css"; */
@import "@/assets/font/iconfont.css";
li{
  list-style: none;
}
</style>
