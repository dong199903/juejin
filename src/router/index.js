import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Editor from "@/views/editor/index"
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
      }
    },
  ]
})
export default router