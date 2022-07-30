<template>
  <div class="shopping">
    <ShopHeader/>
    <div class="shopping-box">
      <div class="item">
        <img src='	https://img01.yzcdn.cn/upload_files/2022/07/20/Fr9Plsl7CbniO3tasqIaukp4EjqF.jpg!280x280.jpg'/>
        <p>JUEJIN FRIENDS 「码赛克」码克杯</p>
        <div class="price">￥ 69.0</div>
      </div>

      <div class="item">
        <img src='@/assets/imgs/shop/2.jpg'/>
        <p>JUEJIN FRIENDS 「码赛克」码克杯</p>
        <div>￥ 69.0</div>
      </div>

      <div class="item">
        <img src='@/assets/imgs/2.jpg'/>
        <p>JUEJIN FRIENDS 「码赛克」码克杯</p>
        <div>￥ 69.0</div>
      </div>

      <div class="item">
        <img src='@/assets/imgs/2.jpg'/>
        <p>JUEJIN FRIENDS 「码赛克」码克杯</p>
        <div>￥ 69.0</div>
      </div>

      <div class="item">
        <img src='@/assets/imgs/2.jpg'/>
        <p>JUEJIN FRIENDS 「码赛克」码克杯</p>
        <div>￥ 69.0</div>
      </div>

    </div>
  </div>
</template>

<script>
  import services from "@/utils/service"
  import ShopHeader from "@/components/ShopHeader" 
  export default{
    components:{
      ShopHeader
    },
    created(){
      this.getShoppingData()
    },
    data(){
      return {
        shop:[]
      }
    },
    methods:{
      async getShoppingData() {
        let info = await services({
          method:"get",
          url:"/shop/list"
        })
        console.log(info)
      }
    }
  }
</script>

<style scoped>
  .shopping{
    background: #f2f2f2;
  }
  .shopping-box{
    width: 1200px;
    margin: 0 auto;
    
    display: flex;
    flex-wrap: wrap;
    
  }
  .item{
    width: 22%;
    height: 330px;
    background-color:#fff;
    margin: 15px;
    padding: 10px 0;
  }
  .item img{
    width: 100%;
    height: 270px;
  }
  p{
    color: #333;
    margin: 15px 10px;
    font-size: 12px;
  }
  .price{
    color:#f60;
    font-size: 13px;
    margin-top: 15px;
  }
</style>