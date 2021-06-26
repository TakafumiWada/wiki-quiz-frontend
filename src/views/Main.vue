<template>
  <div class="main">
    <b-loading v-model="isLoading"></b-loading>
    <div class="play__wrapper">
      <b-button @click="clickPlay">Play</b-button>
    </div>
    <div v-if="isShow">
      <div class="word__container">
        <div
          class="box word"
          v-for="(word, index) in selectedWords"
          :key="`wordIndex:${index}`"
        >
          <div class="word__inner">{{ word }}</div>
        </div>
      </div>
      <div class="answer__input--section">
        <b-field class="answer__input--wrapper">
          <b-input
            class="answer__input"
            placeholder="No label"
            v-model="inputAnswer"
            rounded
          ></b-input>
        </b-field>
      </div>
      <div class="answer__button">
        <b-field>
          <b-button @click="clickAnswer" rounded>Answer</b-button>
        </b-field>
      </div>
      <div v-if="answerText">
        <div class="anwer__text">{{ answerText }}</div>
        <div class="anwer__image"><img :src="articleData.image" alt="" /></div>
        <b-field>
          <b-button @click="tweetAnswer" rounded>Tweet</b-button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      tryGetArticle: 0,
      isLoading: false,
      inputAnswer: "",
      answerText: "",
    };
  },
  computed: {
    articleData() {
      return this.$store.state.articleData;
    },
    searchResult() {
      return this.$store.state.searchResult;
    },
    selectedWords() {
      return this.$store.state.selectedWords;
    },
    isShow() {
      return !this.isLoading && !!this.selectedWords.length;
    },
  },
  methods: {
    async clickPlay() {
      try {
        this.tryGetArticle = 0;
        this.isLoading = true;
        await this.getArticle();
        if (this.tryGetArticle > 2) console.error("記事の取得に失敗");
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        console.error("記事の取得に失敗");
      }
    },
    async getArticle() {
      if (this.tryGetArticle < 3) {
        this.tryGetArticle += 1;
        await this.$store.dispatch("getArticleData");
        if (!this.articleData.title) await this.getArticle();
      }
    },
    async clickAnswer() {
      try {
        await this.searchAnswer();
        this.answerText =
          this.searchResult === this.articleData.title
            ? "正解！"
            : `不正解...  正解は"${this.articleData.title}"`;
      } catch (e) {
        console.error("回答の取得に失敗");
      }
    },
    async searchAnswer() {
      if (this.inputAnswer) {
        await this.$store.dispatch("searchArticleData", {
          text: this.inputAnswer,
        });
      }
    },
    tweetAnswer() {
      const url = `https://twitter.com/intent/tweet?text=私は"${this.searchResult}"と答えました。&url=https://wiki-quiz-frontend-prod.an.r.appspot.com/`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.play {
  &__wrapper {
    margin-bottom: 30px;
  }
}
.word {
  width: 25%;
  min-width: 200px;
  height: 100px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
.answer {
  &__input {
    &--section {
      display: flex;
      justify-content: center;
      margin: 30px 0;
    }
    &--wrapper {
      width: 80%;
      max-width: 400px;
    }
  }
  &__button {
    margin: 20px 0;
  }
}
</style>
