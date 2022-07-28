<template>
  <div class="home">
    homes
    <div class="container">
      <HomeArticleList></HomeArticleList>
    </div>
  </div>
</template>
<script>
import HomeArticleList from "@/views/homeArticleList";

export default {
  components: { HomeArticleList },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: #f4f5f5;
}
</style>
