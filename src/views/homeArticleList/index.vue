<template>
  <div class="main">
    <ArticleList></ArticleList>
    <RightSide></RightSide>
  </div>
</template>

<script>
import ArticleList from "@/views/homeArticleList/ArticleList.vue";
import RightSide from "@/views/homeArticleList/RighSide.vue";

export default {
  components: {
    ArticleList,
    RightSide,
  },
};
</script>

<style scoped>
.main {
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>