import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleData: {},
  },
  mutations: {
    getArticleData(state, payload) {
      state.articleData = payload;
    },
  },
  actions: {
    async getArticleData(context) {
      const articleData = await axios.get("http://localhost:3000/");
      context.commit("getArticleData", articleData);
    },
  },
  modules: {},
});
