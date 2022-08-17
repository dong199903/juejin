import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VueMarkdownEditor from './plugins/mdEditor'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueMarkdownEditor);

import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

const loadimage = require('./assets/imgs/loading.gif')


Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
