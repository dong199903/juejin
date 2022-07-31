import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router )
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Shopping from "@/views/Shopping"
import PhoneLogin from "@/views/login/PhoneLogin"
import OtherLogin from "@/views/login/OtherLogin"
import PhoneResetPwd from "@/views/login/PhoneResetPwd"
import EmailResetPwd from "@/views/login/EmailResetPwd"
import App from "@/views/App"
import {get} from "@/utils/storage"
import { Message } from 'element-ui';

const router = new Router ({
  routes: [
    {
      name:'Home',
      path:"/",
      component:Home
    },
    {
      name: "Detail",
      path: "/detail/:id",
      component:Detail
    },
    {
      name: "Shopping",
      path: "/shop",
      component:Shopping
    },
    {
      name: "PhoneLogin",
      path: "/phonelogin",
      component:PhoneLogin
    },
    {
      name: "OtherLogin",
      path: "/otherlogin",
      component:OtherLogin
    }, 
    {
      name: "PhoneResetPwd",
      path: "/phoneresetpwd",
      component:PhoneResetPwd
    },
    {
      name: "EmailResetPwd",
      path: "/emailresetpwd",
      component:EmailResetPwd
    },
    {
      name: "App",
      path: "/app",
      component:App
    }
  ]
})
router.beforeEach((to,from,next)=>{
  
  const {path} = to
  if(path==='/otherlogin' || path=== '/phonelogin') next()
  else {
    //判断是否有token,没有则跳转
    console.log(get('token'))
    if(!get("token")) {
      Message.error("请进行身份验证")
      setTimeout(() => {
        router.push("/otherlogin")
      }, 1500);
    }
    else next()
  }
  next()
})
export default router