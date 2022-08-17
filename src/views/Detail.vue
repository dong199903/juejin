<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-main-left">
        <!--渲染的文本-->
        <div class="title">{{artile.title}}</div>
        <div class="img"><img :src="artile.coverUrl"/></div>
        <div class="container" v-html="artile.contentHTML">
        </div>
      </div>
      <div class="detail-main-right">
        <div></div>
        <div><img src="@/assets/imgs/2.jpg"/></div>
        <div><img src="@/assets/imgs/3.jpg"/></div>
        <div><img src="@/assets/imgs/1.jpg"/></div>
        <div></div>
      </div>
    </div>
    <IconBarVue/>
  </div>
</template>
<script>
import IconBarVue from '@/components/IconBar.vue'
import {get} from "@/utils/storage"
export default {
  components:{
    IconBarVue
  },
  data(){
    return {
      artile:{}
    }
  },
  mounted(){
    //获取一盘文章，渲染到页面
    this.artile = get('post').post2007921660318062057
    console.log(this.artile)
  },
}
</script>

<style>
  .detail{
    width: 100%;
    height: 100%;
    background: #f4f5f5
  }
  .detail-main{
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .detail-main-right{
    width: 300px;
    margin-left: 20px;
    
  }
  .detail-main-left{
    flex: 1;
    background: #fff;
    padding: 30px; 
    box-sizing: border-box;
  }
  .detail-main-left>div{
    width: 100%;
  }
  .detail-main-left img{
    width: 100%;
  }
  .detail-main-right img{
    width: 100%;
  }
  .detail-main-right>div{
    background: #fff;
    margin-bottom: 20px;
  }
</style>
