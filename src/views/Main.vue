<template>
  <div class="main__wrapper">
    <b-loading v-model="isLoading"></b-loading>
    <div v-if="isShow" class="main">
      <section class="main-left">
        <div class="main-left__topic">
          <div class="main-left__topic--text">関連ワード</div>
          <img
            class="main-left__topic--pencil"
            src="../../public/images/main_pencil.png"
          />
        </div>
        <div class="word__container">
          <div
            class="word"
            v-for="(word, index) in selectedWords"
            :key="`wordIndex:${index}`"
          >
            <div class="word__round"></div>
            <div class="word__inner">{{ word }}</div>
          </div>
        </div>
        <div class="change-button">
          <button @click="clickPlay">お題を変える</button>
        </div>
      </section>
      <section class="main-right">
        <div class="main-right__answer-view" v-if="isAnswer">
          <div class="answer-view__topic">答えは...</div>
          <div class="answer-view__image--wrapper">
            <img
              class="answer-view__image"
              :src="articleData.image"
              alt="正解画像"
            />
          </div>
          <div class="answer-view__text">
            <a :href="titleUrl"
              >A.&nbsp;&nbsp;&nbsp;&nbsp;{{ articleData.title }}</a
            >
          </div>
          <div class="answer-view__subtext">
            答えをクリックしてWikipediaを確認してみよう！
          </div>
          <div class="answer-view__tweet">
            <div class="answer-view__tweet--text">
              あなたの答えをシェアしよう！
            </div>
            <div class="answer-view__tweet--button">
              <button @click="tweetAnswer">Tweet</button>
            </div>
          </div>
        </div>
        <div class="main-right__not-answer" v-else>
          <div class="main-right__topic">
            <div class="main-right__topic--text">ヒント</div>
            <img
              class="main-right__topic--light"
              src="../../public/images/main_light.png"
            />
          </div>
          <div class="hint">
            <div class="hint__round"></div>
            <div class="hint__contents">
              <div class="hint__count">
                <div class="hint__count--text">
                  Hint1.&nbsp;&nbsp;&nbsp;&nbsp;文字数は...
                </div>
                <div class="hint__count--hint">
                  <div class="hint__count--hint--text">
                    {{ titleLength }}文字
                  </div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!isAnimationEnd[0]"
                      v-bind:class="{
                        mask: isAnimationStart[0],
                      }"
                      @click="animationStart(0)"
                      @animationend="animationEnd(0)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[0]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hint__category">
                <div class="hint__category--text">
                  Hint2.&nbsp;&nbsp;&nbsp;カテゴリーは...
                </div>
                <div class="hint__category--hint">
                  <div class="hint__category--hint--inner">
                    <div
                      class="hint__category--hint--element"
                      v-for="category in selectedCategories"
                      :key="category"
                    >
                      {{ category }}
                    </div>
                  </div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!isAnimationEnd[1]"
                      v-bind:class="{
                        mask: isAnimationStart[1],
                      }"
                      @click="animationStart(1)"
                      @animationend="animationEnd(1)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[1]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hint__head">
                <div class="hint__head--text">
                  Hint3.&nbsp;&nbsp;&nbsp;&nbsp;頭文字は...
                </div>
                <div class="hint__head--hint">
                  <div class="hint__head--hint--text">「{{ titleHead }}」</div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!isAnimationEnd[2]"
                      v-bind:class="{
                        mask: isAnimationStart[2],
                      }"
                      @click="animationStart(2)"
                      @animationend="animationEnd(2)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[2]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="answer">
            <div class="answer__input--wrapper">
              <input
                class="answer__input"
                placeholder="この記事のタイトルは？"
                v-model="inputAnswer"
              />
            </div>
            <div class="answer__button--wrapper">
              <button class="answer__button" @click="clickAnswer">Go</button>
            </div>
          </div>
          <div class="link_answer--wrapper">
            <button class="link_answer" @click="isAnswer = true">
              答えを見る
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      tryGetArticle: 0,
      inputAnswer: "",
      answerText: "",
      isAnswer: false,
      isAnimationStart: [false, false, false],
      isAnimationEnd: [false, false, false],
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
    selectedCategories() {
      return this.$store.state.selectedCategories;
    },
    titleLength() {
      return this.articleData.title.length;
    },
    titleHead() {
      if (!this.articleData.title) return;
      return this.articleData.title.charAt(0);
    },
    titleUrl() {
      return this.articleData.url;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    isShow() {
      return !this.isLoading && !!this.selectedWords.length;
    },
    tweetText() {
      return `私は"${this.searchResult}"と答えました。`;
    },
  },
  async created() {
    await this.clickPlay();
  },
  methods: {
    init() {
      this.tryGetArticle = 0;
      this.inputAnswer = "";
      this.answerText = "";
      this.isAnswer = false;
      this.isAnimationStart = [false, false, false];
      this.isAnimationEnd = [false, false, false];
    },
    async clickPlay() {
      try {
        this.init();
        await this.getArticle();
        if (this.tryGetArticle > 2) console.error("記事の取得に失敗");
      } catch (err) {
        this.$store.commit("endLoading");
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
    showHint(index) {
      this.isShowHint[index] = true;
    },
    async clickAnswer() {
      try {
        await this.searchAnswer();
        this.answerText =
          this.searchResult === this.articleData.title ? "正解！" : `不正解...`;
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
    animationStart(index) {
      this.$set(this.isAnimationStart, index, true);
    },
    animationEnd(index) {
      this.$set(this.isAnimationEnd, index, true);
    },
    tweetAnswer() {
      const url = `https://twitter.com/intent/tweet?text=${this.tweetText}&url=https://wiki-quiz-frontend-prod.an.r.appspot.com/`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/main";
</style>
