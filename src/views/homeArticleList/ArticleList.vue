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
          v-for="(item, index) in list"
          :key="index"
          @click="toDetail(item.postId)"
        >
          <Item :source="item"></Item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { Message } from 'element-ui';
import debule from "@/utils/debunle"
export default {
  data() {
    return {
      data:[],
      len:0
    };
  },
  components: {
    Item,
  },
  methods: {
    // 触底触发函数-防抖处理
    fn:debule(1500,function(){
      const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      console.log(scrollTop,clientHeight,scrollHeight)
      if (scrollTop + clientHeight + 30 >= scrollHeight) {
      
        Message.success("加载成功")
        this.getArticleList();
      }
    }),
    listenBottomOut() {
      debule(1500,()=>{
        const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        console.log(scrollTop,clientHeight,scrollHeight)
        if (scrollTop + clientHeight + 30 >= scrollHeight) {
        
          Message.success("加载成功")
          this.getArticleList();
        }
      })      
    },
    scrollListen(){
      debule(1500,this.listenBottomOut)
    },
    //获取文章列表
    getArticleList() {
      this.$store.commit("GET_NUM_LIST")
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
    //当前需要展示的数据
    list(){
      console.log(this.$store.state.editorModule.show)
      return this.$store.state.editorModule.show
    }
  },
  mounted() {
    this.getArticleList();
    // 事件监听
    window.addEventListener("scroll", this.fn);
  },
  destroyed() {
    // 离开页面取消监听
    window.removeEventListener("scroll",this.fn);
  },
};
</script>

<style scoped>
.articlelist {
  width: 700px;
  margin:0 auto;
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