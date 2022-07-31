<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-main-left"></div>
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
export default {
  components:{
    IconBarVue
  }
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
  }
  .detail-main-right img{
    width: 100%;
  }
  .detail-main-right>div{
    background: #fff;
    margin-bottom: 20px;
  }
</style>
