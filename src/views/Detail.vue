<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-main-left"></div>
      <div class="detail-main-right"></div>
      <div class="detail-main-fixed"></div>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>

<style>
  .detail{
    width: 100%;
    min-height: 100vh;
    background: #f4f5f5
  }
  .detail-main{
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .detail-main-right{
    width: 300px;
    margin-left: 20px;
    background: #fff;
  }
  .detail-main-left{
    flex: 1;
    background: #fff;
  }
  .detail-main-fixed{
    position: fixed;
    left: 120px;
    top: 20px;
    width: 100px;
    min-height: 100vh;
    background: red;
  }
</style>
