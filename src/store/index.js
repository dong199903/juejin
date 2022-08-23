import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import services from "@/utils/service"
Vue.use(Vuex)

import editorModule from './editorModule'

const state = {
	articleList: []
}

const mutations = {
	
}



const modules = {
	editorModule
}

export default new Vuex.Store({
	state,
	mutations,
	modules,
})