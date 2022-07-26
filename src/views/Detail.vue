<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-main-left"></div>
      <div class="detail-main-right"></div>
    </div>
    <IconBarVue/>
  </div>
</template>
<script>
import IconBarVue from '@/components/IconBar.vue'
export default {
  components:{
    IconBarVue
  }
}
</script>

<style>
  .detail{
    width: 100%;
    min-height: 100vh;
    background: #f4f5f5
  }
  .detail-main{
    max-width: 1100px;
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
</style>
