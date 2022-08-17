<template>
  <div class="articlelist">
    <nav>
      <ul class="rec-title">
        <li>
          <a href="#" class="active">推荐</a
          ><span style="color: #f1f1f1">|</span>
        </li>
        <li><a href="#">最新</a><span style="color: #f1f1f1">|</span></li>
        <li><a href="#">热榜</a></li>
      </ul>
    </nav>
    <div class="contain">
      <ul>
        <li
          v-for="(item, index) in $store.state.articleList"
          :key="index"
          @click="toDetail(item.article_id)"
        >
          <Item :source="item"></Item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  data() {
    return {
      count: 0,
      mostCount: 14,
    };
  },
  components: {
    Item,
  },
  methods: {
    // 触底触发函数
    listenBottomOut() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        // 没有数据后，不触发请求
        if (this.count < this.mostCount) {
          this.count += 1;
          this.getArticleList();
        }
        return;
      }
    },
    //获取文章列表
    getArticleList() {
      this.$store.dispatch("getArticleList", this.count);
    },
    //跳转到详情页
    toDetail(article_id) {
      this.$router.push({
        name: "Detail",
        params: { id: article_id },
      });
    },
  },
  computed: {
    correntlist() {
      let arr = this.articlelist.slice(0, this.count);
      return arr;
    },
  },
  mounted() {
    this.getArticleList();
    // 事件监听
    window.addEventListener("scroll", this.listenBottomOut);
  },
  destroyed() {
    // 离开页面取消监听
    window.removeEventListener("scroll", this.listenBottomOut, false);
  },
};
</script>

<style scoped>
.articlelist {
  width: 700px;

  background-color: #fff;
}
.articlelist nav {
  border-bottom: 1px solid #f4f4f4;
  height: 30px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
}
.articlelist nav ul {
  display: flex;
  justify-content: space-between;
}
.articlelist nav ul li {
}
.articlelist nav ul li a {
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  color: #333;
  padding: 14px;
}
.articlelist nav ul li a:hover {
  color: #1e80ff;
}
.articlelist nav ul li a.active {
  color: #1e80ff;
}
.contain {
  padding: 0 15px;
}
</style>