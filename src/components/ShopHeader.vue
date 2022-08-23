<template>
  <div class="shop-header">
    <div class="shop-header-main">
      <div>稀土掘金商城</div>
      <div>微店铺首页</div>
      <div>|</div>
      <div>最新商品</div>
      <div>|</div>
      <div>店铺笔记</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"ShopHeader"
  }
</script>

<style scoped>
  .shop-header{
    width: 100%;
    background: black;
    color: #fff;
    line-height: 50px;
  }
  .shop-header-main{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .shop-header-main>div{
    margin-right: 17px;
    font-size: 13px;
  }
  .shop-header-main>div:nth-child(1){
    font-size: 18px;
  }

</style>