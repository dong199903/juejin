import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router )
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import PhoneLogin from "@/views/login/PhoneLogin"
import OtherLogin from "@/views/login/OtherLogin"
import PhoneResetPwd from "@/views/login/PhoneResetPwd"
import EmailResetPwd from "@/views/login/EmailResetPwd"
import test from "@/views/test"

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
      name: "test",
      path: "/test",
      component:test
    }
  ]
})
export default router