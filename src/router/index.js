import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router )
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Shopping from "@/views/Shopping"
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
    }
  ]
})
export default router