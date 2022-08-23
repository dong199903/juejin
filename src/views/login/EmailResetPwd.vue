<template>
  <div>
    <div ref="box" class="box">
    <img :src="loginSrc" alt="表情图" class="loginImages" />

    
     <h1 class="login_title">邮箱重置密码</h1>
    <i class="close" @click="close"></i>

    <el-form 
        class="login_input" 
        :model="EmailForm" 
        label-width="0px"
    >
    
    <el-form-item label="">
        <el-input 
            v-model="EmailForm.email" 
            placeholder="请输入邮箱"
            @focus="changeImages"
            @blur="recoverImages"
            class="phone"></el-input>
    </el-form-item>

    <el-button type="primary" @click="sendEmail" style="width:100%;margin-bottom: 10px;">发送验证邮件</el-button>
    </el-form>

    <div class="else">
    <el-link :underline="false" type="primary" @click="toPhoneRestPwd">手机重置密码</el-link>
    <el-link :underline="false" type="primary" @click="toOtherLogin" style="float:right">账密登录</el-link>
    </div>
    
   </div>
    <!-- 遮盖层 -->
   <div ref="bg" class="login-bg"></div>
  </div>
</template>

<script>
// import { isBoxedPrimitive } from 'util/types';

export default {
   data() {
      return {
        EmailForm: {
          email: ''
        },
        loginSrc: require("@/assets/login1.png"),
      }
    },
    methods: {
      sendEmail() {
        if(this.EmailForm.email===''){
          this.$message("请输入正确的邮箱");
        }else{
           var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
           if(!reg.test(this.EmailForm.email)){
            this.$message("请输入正确的邮箱");
           }else{
             this.$message("已发送");
           }
        }
        
      },
      close(){
        this.$refs.box.style.display="none";
        this.$refs.bg.style.display="none";
      },
      toOtherLogin(){
        this.$router.push({path:'/otherlogin'});
      },
      toPhoneRestPwd(){
        this.$router.push({path:'/phoneresetpwd'});
      },
      //获取焦点时改变图片路径
      changeImages() {
        this.loginSrc = require("@/assets/login2.png");
    },
    //失去焦点时恢复第一张图片
    recoverImages() {
      this.loginSrc = require("@/assets/login1.png");
    }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.login-bg{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, .3);
  z-index:7;
}

.box{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width:320px;
    height:220px;          
    background-color: #fff;
    padding:25px;
    border-radius: 2px;
    z-index:9;
}

.login_title{
    display: inline-block;
    font-weight:bold;
    font-size:large;
    margin:0 0 20px;
}

.close::after{
    content: '\2716';
    color: rgb(182, 179, 179);
    float:right;
}

.agreement{
    font-size:small;
    line-height: 40px;
    color:grey;
    vertical-align: middle;
}
.loginImages {
  position: absolute;
  top: -81px;
  left: 30%;
  width: 40%;
}
.getcode{
  display: inline-block; 
  position: absolute;
  top:-1px;
  right:40px;
  height: 40px;
  line-height:30px;
  background-color:pink ;
}

</style>