import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Shopping from "@/views/Shopping"
import PhoneLogin from "@/views/login/PhoneLogin"
import OtherLogin from "@/views/login/OtherLogin"
import PhoneResetPwd from "@/views/login/PhoneResetPwd"
import EmailResetPwd from "@/views/login/EmailResetPwd"
import Search from "@/views/Search"
import Course from "@/views/Course"
import Me from "@/views/Me"
import Test from "@/views/Test"
import {get} from "@/utils/storage"

import { Message } from 'element-ui';
import Editor from "@/views/editor/index"
import Published from "@/views/editor/Published"
const router = new Router({
  routes: [
    {
      name: 'Home',
      path: "/",
      component: Home
    },
    {
      name: "Detail",
      path: "/detail/:id",
      component: Detail
    },
    {
      name: 'Editor',
      path: "/editor",
      component: Editor,
      meta: {
        title: "写文章 - 仿掘金"
      },
      children: [
        {
          name: "EditorChange",
          path: ":postId",
          component: Editor,
          meta: {
            title: "写文章 - 仿掘金"
          },
        },
      ]
    },
    {
      name: 'Published',
      path: "/published",
      component: Published,
      meta: {
        title: "发布成功"
      },
    },
    {
      name: "Shopping",
      path: "/shop",
      component: Shopping
    },
    {
      name: "PhoneLogin",
      path: "/phonelogin",
      component: PhoneLogin
    },
    {
      name: "OtherLogin",
      path: "/otherlogin",
      component: OtherLogin
    },
    {
      name: "PhoneResetPwd",
      path: "/phoneresetpwd",
      component: PhoneResetPwd
    },
    {
      name: "EmailResetPwd",
      path: "/emailresetpwd",
      component: EmailResetPwd
    },
    {
      name: "Course",
      path: "/course",
      component:Course
    },
    {
      name: "Search",
      path: "/search/:query",
      component:Search
    },
    {
      name: "Me",
      path: "/me",
      component:Me
    },

    {
      name: "Test",
      path: "/test",
      component:Test
    }
  ]
})
router.beforeEach((to, from, next) => {
  const { path } = to
  if (path === '/otherlogin' || path === '/phonelogin') next()
  else {
    //判断是否有token,没有则跳转
    console.log(get('token'))
    if (!get("token")) {
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