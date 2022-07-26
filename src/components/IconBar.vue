<template>
  <div class="icons">
    <div class="iconfont icon-dianzan"><span>1</span></div>
    <div class="iconfont icon-huifu"><span>2</span></div>
    <div class="iconfont icon-shoucang"></div>
    <div class="iconfont icon-fenxiang">
      <div class="share">
        <div><i class="iconfont icon-weixin"></i><span>微信</span></div>
        <div><i class="iconfont icon-weibo1"></i><span>新浪微博</span></div>
        <div><i class="iconfont icon-github-fill"></i><span>GiuHub</span></div>
      </div>
    </div>
    <div class="iconfont icon-jinggao"></div>
    <div class="iconfont icon-saomiao"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .icons{
    position: fixed;
    left: 150px;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icons>div{
    width: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    color: #8a919f;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 20px;
    position: relative;
  }
  .icons>div>span{
    position: absolute;
    right: 4px;
    top: -20px;
    font-size: 12px;
  }
  .share{
    position: absolute;
    left: 50px;
    top: 0px;
    padding: 15px;
    background: #fff;
    width:100px;
    box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
    display: none;
  }
  .icon-fenxiang:hover .share{
    display: block;
  }
  .share>div{
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .share>div>i{
    margin-right: 10px;
  }
  
</style>