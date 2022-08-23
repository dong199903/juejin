<template>
  <div class="detail">
    <TopNav></TopNav>
    <div class="detail-main">
      <div class="detail-main-left">
        <!--渲染的文本-->
        <div class="title">{{post.title}}</div>
        <div class="img"><img :src="post.coverUrl"/></div>
        <div class="container"  v-html="$xss(post.contentHTML)"></div>
        <div></div>
        <Comment/>
        <div>
          <h2>热门评论</h2>
          <div v-if="post.commentList">
            <div class="comment-item" v-for="(item,index) in post.commentList" :key="index">
              <div class="author">
                <div><img src="./../assets/头像.jpg"/><div>掘金运营助手</div></div>
                <div>{{timeDeal(item.date).year}}-{{timeDeal(item.date).month}}-{{timeDeal(item.date).day}}</div>
              </div>
              <div>{{item.content}}</div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="detail-main-right">
        <div></div>
        <div><img src="@/assets/imgs/2.jpg"/></div>
        <div><img src="@/assets/imgs/3.jpg"/></div>
        <div><img src="@/assets/imgs/1.jpg"/></div>
        <Group class="group"/>
      </div>
    </div>
    <IconBarVue :pid='this.$route.params.id'/>
  </div>
</template>
<script>
import TopNav from '@/components/TopNav'
import IconBarVue from '@/components/IconBar.vue'
import Comment from "@/components/Comment.vue"
import Group from "@/components/Group.vue"
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'
export default {
  components:{
    IconBarVue,Comment,Group,TopNav
  },
  data(){
    return {

    }
  },
  mounted(){
    let mainContent = document.querySelector('.container');
    let blocks = mainContent.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    });
  },
  computed:{
    post(){
      let res = this.$store.state.editorModule.post 
      let post = res.find(item=>item.postId==this.$route.params.id)
      return post
    }
  },
  data(){
    return {
      artile:{}
    }
  },
  methods:{
    timeDeal(time) {
      /**返回年月日,时分秒 */
      let date = new Date(time)
      let year = date.getFullYear()
      let month = date.getMonth()+1
      let day = date.getDate()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let second = date.getSeconds()
      return {
        year,month,day,hour,minutes,second
      }
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
    margin: 15px 10px;
    font-size: 28px;
    font-weight: bold;
  }
  .detail{
    width: 100%;
    height: 100%;
    background: #f4f5f5
  }
  .detail-main{
    height: 100%;
    margin-left: 60px;
    display: flex;
  }
  .detail-main-right{
    width: 300px;
    margin-left: 20px;
  }
  .detail-main-left{
    margin-top: 20px;
    width: 900px;
    background: #fff;
    padding: 30px; 
    box-sizing: border-box;
    overflow: hidden;
    padding-bottom: 400px;
  }
  .detail-main-right img{
    width: 100%;
  }
  .detail-main-right>div{
    background: #fff;
    margin-bottom: 20px;
  }
  .author{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }  .author img{
    width: 60px !important;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }.author>div:first-child{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .comment-item{
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    border-top:1px solid #ccc;
  }
  .container img{
    width: 600px;
  }

  .group{
    position: sticky;
    top:0;
  }
</style>
