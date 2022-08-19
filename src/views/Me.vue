<template>
  <div class="me">
    <top-nav/>
    <div class="me-bot">
      <div class="me-bot-left">
        <div class="author">
          <img src="./../assets/头像.jpg" alt=""/>
          <img src="./../assets/author.jpg" alt="" />
        </div>

        <div class="main">

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章" name="1">
              <div v-for="(item,index) in arr1" :key="index" @click="toDetail(item.postId)">
                <Item :source="item"/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收藏" name="2">
              <div v-for="(item,index) in arr2" :key="index"  @click="toDetail(item.postId)">
                <Item :source="item"/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="点赞" name="3">
              <div v-for="(item,index) in arr3" :key="index"  @click="toDetail(item.postId)">
                <Item :source="item"/>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <img class="bgr" src="./../assets/bgr.jpg"/>
    </div>
    
  </div>
</template>

<style scoped>

</style>

<script>
import TopNav from '@/components/TopNav/index.vue';
import Menu from '@/components/Menu/index.vue';
import Item from "@/views/homeArticleList/Item.vue"
export default {
  components: { TopNav, Menu, Item },
  data(){
    return {
      activeName: '1',
      arr1:[],
      arr2:[],
      arr3:[]
    }
  },

  created(){
    
      //1.获取文章数据
      let res = this.$store.state.editorModule.post
      let arr1 = [],arr2 = [],arr3 = []
      arr1 = res
      res.forEach(item=>{
        if(item.cang) arr2.push(item)
        if(item.love) arr3.push(item)
      })

      this.arr1 = arr1
      this.arr2 = arr2
      this.arr3 = arr3
  },
  methods:{
    toDetail(id){
      this.$router.push({
        name: "Detail",
        params: { id: id },
      });
    }
  }
}
</script>
<style scoped>
  .me{
    width: 100%;
    height: 100%;
    background: #f4f5f5;
  }
  .me-bot{
    background: #fff;
    width:1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .me-bot-left{
    width: 750px;
  }
  .bgr{
    margin-left: 15px;
  }
  .author{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .author>img:first-child{
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .author>img:last-child{
    width: 700px;
    height: 150px;

  }
  .main{
    padding: 20px 30px;
  }
  :deep(.el-tabs__item){
    font-size: 20px;
    font-weight: 400;
  }
</style>