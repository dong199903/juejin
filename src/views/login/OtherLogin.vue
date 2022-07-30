<template>

  <div>
    <div ref="box" class="box">
    <img :src="loginSrc" alt="表情图" class="loginImages" />

    
     <h1 class="login_title">账密登录</h1>
    <i class="close" @click="close()"></i>

    <el-form 
        class="login_input" 
        :model="otherLoginForm" 
        label-width="0px"
    >
    
    <el-form-item label="">
        <el-input 
            v-model="otherLoginForm.phone" 
            placeholder="邮箱/手机号（国际号码加区号）"
            @focus="changeImages(2)"
            @blur="recoverImages"
            class="phone"></el-input>
    </el-form-item>

<div>
    <el-form-item label="" class="code">
        <el-input 
            v-model="otherLoginForm.code" 
            placeholder="请输入密码"
            @focus="changeImages(3)"
            @blur="recoverImages"
            ></el-input>
    </el-form-item>

     <!-- <el-button type="text" class="getcode">获取验证码</el-button>  -->
</div>

    <el-button type="primary" @click="login" style="width:100%;margin-bottom: 10px;">登录</el-button>
    </el-form>

    <div class="else">
    <el-link :underline="false" type="primary" @click="toOtherLogin">手机登录</el-link>
    <el-link :underline="false" type="primary" @click="toResetPwd" style="float:right">忘记密码</el-link>
    
    <div class="icon-box">
      <el-link :underline="false" class="icon-bg" href="https://weibo.com" target="_blank">
      <img src="@/assets/weibo.png" alt="weibo" class="icon"></el-link>
      <el-link :underline="false" class="icon-bg" href="https://weixin.com" target="_blank">
      <img src="@/assets/wechat.png" alt="wechat" class="icon"></el-link>
      <el-link :underline="false" class="icon-bg" href="https://github.com" target="_blank">
      <img src="@/assets/github.png" alt="github" class="icon"></el-link>
    </div>
    
    <div class="agreement">
    <span>注册登录即表示同意</span>
    <el-link :underline="false"
        type="primary"
        href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/86857833-55f6-4d9e-9897-45cfe9a42be4.html" 
        target="_blank"
        >用户协议</el-link>
    <span>、</span>
    <el-link :underline="false"
        type="primary" 
        href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/7b28b328-1ae4-4781-8d46-430fef1b872e.html" 
        target="_blank">隐私政策</el-link>
    </div>
    </div>
    
   </div>
    <!-- 遮盖层 -->
   <div ref="bg" class="login-bg"></div>
  </div>
</template>

<script>
// import { isBoxedPrimitive } from 'util/types';
import services from "@/utils/service"
export default {
   data() {
      return {
        otherLoginForm: {
          phone: '',
          code: ''
        },
        loginSrc: require("@/assets/login1.png"),
      }
    },
    methods: {
      async login() {
       if(this.otherLoginForm.phone===''){
          this.$message("请填写手机号或邮箱");
        }else if(this.otherLoginForm.code===''){
          this.$message("请输入密码");
        }else{
          //正常的登录操作
          console.log(this.otherLoginForm.phone,this.otherLoginForm.code)
          let info = await services({
            url:"/user/login",
            method:"post",
            data:{
              username:this.otherLoginForm.phone,
              password:this.otherLoginForm.code
            }
          })
          //清空表单数据
          this.otherLoginForm.phone = ""
          this.otherLoginForm.code = ""
          console.log(info)
        }
      },
      close(){
        this.$refs.box.style.display="none";
        this.$refs.bg.style.display="none";
      },
      toOtherLogin(){
        this.$router.push({path:'/phonelogin'});
      },
      toResetPwd(){
        this.$router.push({path:'/phoneresetpwd'});
      },
      //获取焦点时改变图片路径
      changeImages(index) {
      if (index == 2) {
        this.loginSrc = require("@/assets/login2.png");
      }
      if (index == 3) {
        this.loginSrc = require("@/assets/login3.png");
      }
    },
    //失去焦点时恢复第一张图片
    recoverImages() {
      this.loginSrc = require("@/assets/login1.png");
    },
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
    height:360px;          
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

.icon-box{
  display:flex;
  align-content:center;
  justify-content: space-around;
  margin-top:15px; 
}
.icon-bg{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
}

.icon{
  display: flex;
  width:45%;
  height: 45%;
  margin:auto;
}
</style>