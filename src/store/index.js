import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const BASE_URL = "https://wiki-quiz-backend-prod.an.r.appspot.com";
// const BASE_URL = "http://localhost:3000";
const LIMITED_WORD_LENGTH = 18;

const randomSelect = (array, num) => {
  let newArray = [];
  let rand = 0;
  while (newArray.length < num && array.length > 0) {
    rand = Math.floor(Math.random() * array.length);
    if (array[rand].length <= LIMITED_WORD_LENGTH) {
      newArray.push(array[rand]);
      array.splice(rand, 1);
    }
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
      image: "",
    },
    searchResult: "",
    selectedCategoriesNumber: 3,
    selectedCategories: [],
    selectedWordsNumber: 9,
    selectedWords: [],
    isLoading: false,
  },
  mutations: {
    getArticleData(state, payload) {
      state.articleData = payload;
    },
    selectWords(state) {
      if (state.articleData.title) {
        state.selectedWords = randomSelect(
          state.articleData.words,
          state.selectedWordsNumber
        );
      }
    },
    selectCategories(state) {
      if (state.articleData.title) {
        if (state.articleData.categories.length < 3) {
          state.selectedCategories = state.articleData.categories;
          return;
        }
        state.selectedCategories = randomSelect(
          state.articleData.categories,
          state.selectedCategoriesNumber
        );
      }
    },
    getSearchResult(state, payload) {
      state.searchResult = payload.searchResult;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    async getArticleData(context) {
      context.commit("startLoading");
      const res = await axios.get(`${BASE_URL}/article/get`);
      context.commit("endLoading");
      const articleData = res.data;
      context.commit("getArticleData", articleData);
      context.commit("selectWords");
      context.commit("selectCategories");
    },
    async searchArticleData(context, payload) {
      const res = await axios.post(`${BASE_URL}/article/search`, {
        text: payload.text,
      });
      const searchResult = res.data;
      context.commit("getSearchResult", { searchResult });
    },
  },
});
