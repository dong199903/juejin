<template>
  <div class="container">
    <input type="file" name="file" @change="uploadFilds"/>
  </div>
</template>
<script>
import services from "@/utils/service"
export default {
  methods:{
     uploadFilds:async(event)=>{
      const files = event.target.files;
      console.log(files[0])
      const formDate = new FormData();
     
      formDate.append('file', files[0], files[0].name)
      console.log(formDate)

      let info = await services.post('upload/file',formDate,{
        Headers:{
          "Content-type":"multipart/form-data"
        }
      })
      console.log(info)
      // const response = await uploadFilds(formDate);
      // if (response.code === 1) {
      //   console.log("文件上传成功！");
      // }
    }
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


