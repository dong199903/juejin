<template>
  <div>
    <div ref="box" class="box">
    <img :src="loginSrc" alt="表情图" class="loginImages" />

    
     <h1 class="login_title">手机登录</h1>
    <i class="close" @click="close()"></i>

    <el-form 
        class="login_input" 
        :model="phoneLoginForm" 
        label-width="0px"
    >
<div class="input-box">

     <el-dropdown  trigger="click" class="prefix" placement="bottom-start">
      <span class="el-dropdown-link">
        <span ref="prefix">+86</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item @click.native="choosePrefix0">中国+86</el-dropdown-item>
        <el-dropdown-item @click.native="choosePrefix1">中国澳门+853</el-dropdown-item>
        <el-dropdown-item @click.native="choosePrefix2">中国台湾+886</el-dropdown-item>
        <el-dropdown-item @click.native="choosePrefix3">中国香港+852</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-form-item label="">
        <el-input 
            v-model="phoneLoginForm.phone" 
            placeholder="请输入手机号码"
            @focus="changeImages()"
            @blur="recoverImages"
            class="phone"></el-input>
    </el-form-item>
</div>

<div class="input-box">
    <el-form-item label="" class="code">
        <el-input 
            v-model="phoneLoginForm.code" 
            placeholder="验证码"
            ></el-input>
    </el-form-item>

    <el-button v-if="show" type="text" class="getcode" @click="getCode()">获取验证码</el-button> 
    <span v-if="!show" class="count-down">{{count}}秒后重新发送</span>
</div>

    <el-button type="primary" @click="login" style="width:100%;margin-bottom: 10px;">登录</el-button>
    </el-form>

    <div class="else">
    <el-link :underline="false" type="primary" @click="toOtherLogin">其他登录方式</el-link>
    <div class="agreement">
    <span>注册登录即表示同意</span>
    <el-link :underline="false" 
        type="primary"
        href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/86857833-55f6-4d9e-9897-45cfe9a42be4.html" 
        target="_blank">用户协议</el-link>
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
export default {
   data() {
      return {
        show:true,
        count:'',
        timer:null,

        phoneLoginForm: {
          phone: '',
          code: ''
        },
        loginSrc: require("@/assets/login1.png"),
      }
    },
    methods: {
      login() {
        if(this.phoneLoginForm.phone===''){
          this.$message("请填写手机号");
        }else if(this.phoneLoginForm.code===''){
          this.$message("请输入验证码");
        }else{


        }
      },
      close(){
        this.$refs.box.style.display="none";
        this.$refs.bg.style.display="none";
      },
      toOtherLogin(){
        this.$router.push({path:'/otherlogin'});
      },
      choosePrefix0(){
        this.$refs.prefix.innerHTML="+86";
      },
      choosePrefix1(){
        this.$refs.prefix.innerHTML="+853";
      },
      choosePrefix2(){
        this.$refs.prefix.innerHTML="+886";
      },
      choosePrefix3(){
        this.$refs.prefix.innerHTML="+852";
      },
      getCode(){
        if(this.phoneLoginForm.phone!==''){
          //  console.log(this.phoneLoginForm.phone);
           let TIME_COUNT=60;
           if(!this.timer){
            this.count=TIME_COUNT;
            this.show=false;
            this.timer=setInterval(()=>{
              if(this.count&&this.count<=TIME_COUNT){
                this.count--;
              }else{
                this.show=true;
                clearInterval(this.timer);
                this.timer=null;
              }
            },1000)
           }
        }
        
      },
      //获取焦点时改变图片路径
      changeImages() {   
        this.loginSrc = require("@/assets/login2.png");
    },
    //失去焦点时恢复第一章图片
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
    height:300px;          
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
.input-box{
  display: flex;
  border: 1px solid #e9e9e9;
  border-radius: 2px; 
  height: 40px;
  margin-bottom: 20px;
}
.getcode{
  padding: 13px;
} 
.count-down{
  color: gray;
  width:180px;
  font-size:14px;
  padding: 13px;
}
.prefix{
   padding: 13px;
   width: 85px;
}

.input-box>>>.el-input__inner{
  border: none;
  background-color: transparent;
}
 .el-dropdown-link {
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 10px;
    color: gray;
    cursor: pointer;
    /* float:right; */
  }
  .demonstration {
    display: block;
    color: black;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>