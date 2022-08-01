<template>
  <div class="course">
    <div class="coure-main">
      <div class="content">
        <div class="content-title">
          <div class="content-title-left">
            <div>全部</div>
            <div>最新</div>
            <div>最热</div>
            <div class="price">
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

        <div class="course-list">
          <img src="@/assets/book1.jpg"/>
          <div class="course-list-info">

            <p>零基础入门c++</p>

            <div class="desc">带你从0开始认真的学习c++灯记者擦大大大打打打打啊打打打</div>

            <div class="author">
              <img src='@/assets/user.jpg'/>
              <div class="name">董泽鹏</div>
              <div>前端首席开发工程师</div>
            </div>

            <div class="other">
              <div class="price">￥89</div>
              <div>已完结</div>
              <div>37小节</div>
              <div>999人已购买</div>
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
  .price{
    font-size: 22px;
    font-weight: bold;
    color: #ff8412!important;
  }
</style>