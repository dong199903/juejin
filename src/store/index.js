import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import services from "@/utils/service"
Vue.use(Vuex)

const state = {
	articleList: []
}

const mutations = {
	GETARTICLELIST(state, articleList) {
		state.articleList = [...state.articleList, ...articleList];
	}
}

const actions = {
	async getArticleList({ commit }, count) {
		let res = await services({
			method: 'get',
			url: '/article/articlelist',
			params: {
				count
			}
		});
		console.log(res)
		if (res.code == 200) {
			commit('GETARTICLELIST', res.data.articlelist)
		}
	}
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
})