<template>
  <div class="course">
    <div class="coure-main">
      <div class="content"></div>
      <div class="nav"><img src="@/assets/course-nav.jpg"/></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .course{
    background: #f4f5f5;
  }
  .coure-main{
    width: 1000px;
    margin: 0 auto;
    position: relative;
    
    height: 300px;
  }
  .content{
    width: 80%;
    height: 100px;
    background: red;
  }
  .nav{
    width: 250px;
    position: fixed;
    right:270px;
    top: 0;
  }
  .nav img{
    width: 100%;
  }
</style>