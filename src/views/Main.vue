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
      <div class="anwer__text" v-if="answerText">{{ answerText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      isLoading: false,
      inputAnswer: "",
      answerText: "",
    };
  },
  computed: {
    articleData() {
      return this.$store.state.articleData;
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
      this.isLoading = true;
      await this.$store.dispatch("getArticleData");
      this.isLoading = false;
    },
    clickAnswer() {
      this.answerText =
        this.inputAnswer === this.articleData.title ? "正解" : "不正解";
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
