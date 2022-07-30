<template>
  <div class="shopping">
    <ShopHeader/>
    <div class="shopping-box">
      <div class="item">
        <img/>
        <p></p>
        <div></div>
      </div>

    </div>
  </div>
</template>

<script>
  import ShopHeader from "@/components/ShopHeader" 
  export default{
    components:{
      ShopHeader
    },
    data(){
      return {
        
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .shopping-box{
    width: 1200px;
    margin: 0 auto;
    background: #f2f2f2;
    display: flex;
    flex-wrap: wrap;
  }
</style>