import axios from "axios";
import router from "@/router/index"
import {set,get} from "@/util/storage"

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/61d777d394fcbffba0ad0c7c844ef61e/api',
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
  
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance