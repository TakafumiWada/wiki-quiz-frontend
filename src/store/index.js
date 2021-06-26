import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const limitedWordLength = 18;
// const BASE_URL = "https://wiki-quiz-backend-prod.an.r.appspot.com";
const BASE_URL = "http://localhost:3000";

const randomSelect = (array, num) => {
  let newArray = [];
  let rand = 0;
  const limitedWords = array.filter((element) => {
    return element.length <= limitedWordLength;
  });
  num = Math.min(num, limitedWords.length);
  while (newArray.length < num && array.length > 0) {
    rand = Math.floor(Math.random() * array.length);
    if (array[rand].length < limitedWordLength) {
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
    },
    selectedWordsNumber: 9,
    selectedWords: [],
  },
  mutations: {
    getArticleData(state, payload) {
      state.articleData = payload;
    },
    selectWords(state) {
      if (state.articleData.words?.length) {
        state.selectedWords = randomSelect(
          state.articleData.words,
          state.selectedWordsNumber
        );
      }
    },
  },
  actions: {
    async getArticleData(context) {
      const res = await axios.get(`${BASE_URL}/article/get`);
      const articleData = res.data;
      if (!articleData) return;
      context.commit("getArticleData", articleData);
      context.commit("selectWords");
    },
  },
});
