import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const randomSelect = (array, num) => {
  let newArray = [];
  while (newArray.length < num && array.length > 0) {
    const rand = Math.floor(Math.random() * array.length);
    newArray.push(array[rand]);
    array.splice(rand, 1);
  }
  return newArray;
};

export default new Vuex.Store({
  state: {
    articleData: {
      categories: [],
      contents: [],
      title: "",
      topic: {},
      words: [],
    },
    selectedWordsNumber: 9,
    selectedWords: [],
  },
  mutations: {
    getArticleData(state, payload) {
      state.articleData = payload;
    },
    selectWords(state) {
      if (state.articleData.words.length) {
        state.selectedWords = randomSelect(
          state.articleData.words,
          state.selectedWordsNumber
        );
      }
    },
  },
  actions: {
    async getArticleData(context) {
      const res = await axios.get(
        "https://wiki-quiz-backend-prod.an.r.appspot.com/"
      );
      const articleData = res.data;
      if (!articleData) return;
      context.commit("getArticleData", articleData);
      context.commit("selectWords");
    },
  },
});
