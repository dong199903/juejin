<template>
  <div class="home">
    <TopNav></TopNav>
    <Menu></Menu>
    <div class="container">
      <HomeArticleList></HomeArticleList>
    </div>
  </div>
</template>
<script>
import HomeArticleList from "@/views/homeArticleList";
import TopNav from '@/components/TopNav/index.vue';
import Menu from '@/components/Menu/index.vue';

export default {
  components: { HomeArticleList, TopNav, Menu },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: #f4f5f5;
}
.container {
  margin-top: 8px;
}
</style>
