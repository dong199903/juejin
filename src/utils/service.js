import axios from "axios";
import router from "@/router/index"
import {set,get} from "@/utils/storage"
import { Message } from 'element-ui';
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
});


instance.interceptors.request.use(function (config) {
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  let data = response.data
  if(data.code==200)
    //1.如果是登录，保持token。跳转到首页
    set("token",data.data)
    Message.success("登录成功")
    setTimeout(() => {
      router.push("/")
    }, 1500);
    return data;
  if(data.code==501) {
    Message.error(data.msg)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance