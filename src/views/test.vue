<template>
  <div class="container" v-html="text">
    
  </div>
</template>
<script>
import {get} from "@/utils/storage"
export default {
  data(){
    return {
      text:""
    }
  },
  mounted(){
    //获取一盘文章，渲染到页面
    let artile = get('post').post5412491660142478556.contentHTML
    console.log(artile)
    this.text = artile
  },
  methods:{
     
  }
}
</script>
<style>
    .container{
        position: relative;
        width: 300px;
        background-color: #f1f1f1;
    }
    .container input{
        width: 100%;
        height: 30px;
    }
    .container button{
        position: absolute;
        top: 7px;
        right: 0;
        background-color: #fff;
        border: none;   
        outline: none;  
     }
</style>


