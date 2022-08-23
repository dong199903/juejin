<template>
  <div class="search">
    <TopNav></TopNav>
    <SearchMenu></SearchMenu>
    <div class="ser-content">
      <div v-for="(item,index) in list"  :key="index" @click="goDetal(item.postId)" >
        <Item :source="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/index.vue';
import Item from "@/views/homeArticleList/Item.vue";
import SearchMenu from '../components/SearchMenu/index.vue'
export default{
  components:{
    TopNav,
    Item,
    SearchMenu
},
  //将路由传递的参数获取数据
  created(){
    let query = this.$route.params.query
    this.$store.commit("SEARCH",query)
  },
  methods:{
    goDetal(id){
      this.$router.push({
        name: "Detail",
        params: { id: id },
      });
    }
  },
  computed:{
    list(){
      return this.$store.state.editorModule.search
    }
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped>
  .search>img{
    width: 100%;
  }
  .ser-content{
    width:700px;
    margin-left: 160px;
    margin-top: 20px;
    /* margin:0 auto; */
  }
</style>