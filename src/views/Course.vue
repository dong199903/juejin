<template>
  <div class="course">
    <div class="coure-main">
      <div class="content">
        <div class="content-title">
          <div class="content-title-left">
            <div @click="bindChoice(0)" :class="choiceIndex=='0'?'active':''">全部</div>
            <div @click="bindChoice(1)" :class="choiceIndex=='1'?'active':''">最新</div>
            <div @click="bindChoice(2)" :class="choiceIndex=='2'?'active':''">最热</div>
            <div @click="bindChoice(3)" :class="choiceIndex=='3'?'active':''" class="price">
              <span>价格</span>
              <div>
                <i class="iconfont icon-xiangshangjiantou"></i>
                <i class="iconfont icon-xiala"></i>
              </div>
            </div>
            
          </div>
          <div class="content-title-right">
            <i class="iconfont icon-sousuo"></i><span>课程搜索</span>
          </div>
        </div>

        <div class="course-list" v-for="(item,index) in list" :key="index">
          <img :src=require(item.book) />
          <div class="course-list-info">

            <p>{{item.title}}</p>

            <div class="desc">{{item.desc}}</div>

            <div class="author">
              <img :src='item.author'/>
              <div class="name">{{item.name}}</div>
              <div>{{item.info}}</div>
            </div>

            <div class="other">
              <div class="price">￥{{item.price}}</div>
              <div>已完结</div>
              <div>{{item.count}}小节</div>
              <div>{{item.view}}人已购买</div>
            </div>
          </div>
        </div>
        
      </div>

      <div class="nav">
        <div class="nav-box">
          <img src="@/assets/course-nav.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import services from "@/utils/service"
  import debule from "@/utils/debunle"
  export default {
    /**
     * size:一次性加载个数
     * pageNum:当前页码
     * type:1是默认的。2是按价格排序。升序
     */
    data() {
      return {
        choiceIndex:0,
        size:5,
        pageNum:0,
        type:0,
        list:[]
      }
    },
    methods:{
       bindChoice:function(e) {
        if(e==this.choiceIndex) return
        this.list = []
        this.choiceIndex = e
        this.pageNum = 0
        
        if(e==3) 
          this.type = 1
        else
          this.type = 0
        this.loadData()
      },
      loadData:async function(){
        let info = await services({
          method:"get",
          url:"/course/list",
          params:{
            size:this.size,
            type:this.type,
            pageNum:this.pageNum
          }
        })
        this.list.push(...info.data.list)
        console.log(this.list)
      },
      
      scrollJudge:function(){
        var clientHeight = document.documentElement.scrollTop;
        var scrollTop = document.documentElement.clientHeight;
        var scrollHeight = Math.ceil(Math.max(document.body.clientHeight,document.documentElement.scrollHeight))
        console.log(clientHeight,scrollTop,scrollHeight)
        if(scrollTop + clientHeight >= scrollHeight-10){
          this.loadData()
        }
      }
    },
    async created(){
      this.loadData()
    },
    mounted(){
      window.addEventListener('scroll',debule(1000,this.scrollJudge))
    },
    unmounted() {
      window.removeEventListener("scroll",debule(1000,this.scrollJudge))
    }
  }
</script>

<style scoped>
  .course{
    background: #f4f5f5;
    min-height: 100vh;
  }
  .coure-main{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;
  }
  .content{
    width: 80%;
    background: #fff;
    padding: 20px 15px;
    box-sizing: border-box;
  }
  .nav{
    width:20%;
    height:100vh;
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
  }
  .nav-box{
    width: 300px;
    position: fixed;
    top: 0;
    height: 200px;
  }
  .nav img{
    width: 100%;
    height: 100vh;
  }
  .content-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
  .content-title-left{
    display: flex;
  }
  .content-title-left>div{
    margin-right: 34px;
    color: #8a919f;
    font-size: 18px;
  }
  .price{
    display: flex;
  }
  .price div>i{
    display: block;
    margin-left: 10px;
  }
  .icon-xiangshangjiantou{
    position: relative;
    top: -1px;
    font-size: 12px;
  }
  .icon-xiala{
    position: relative;
    right: 2px;
    bottom: 3px;
  }
  .content-title-right i{
    margin-right: 15px;
  }

  .course-list{
    display: flex;
    margin-top: 40px;
  }
  .course-list>img{
    width: 130px;
    margin-right: 25px;
  }
  .course-list-info>p{
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .desc{
    margin-top: 15px;
    line-height: 20px;
    height: 20px;
  }
  .author{
    display: flex;
    align-items: center;
    margin:12px 0;
  }
  .author img{
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .author div{
    margin: 0 10px;
  }
  .author .name{
    font-weight: bold;
    font-size: 19px;
  }
  .other{
    display: flex;
    align-items: center;
    margin-top: 13px;
  }
  
  .other div{
    margin-right: 12px;
    color: #8a919f;
  }
  .other .price{
    font-size: 22px;
    font-weight: bold;
    
  }
  .active{
    color: #ff8412!important;
  }
</style>