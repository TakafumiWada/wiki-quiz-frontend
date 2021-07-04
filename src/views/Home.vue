<template>
  <div>
    <section class="top">
      <div class="top__topic">
        <div class="top__topic--main">WikiQuiz</div>
        <div class="top__topic--sub">
          <div>text text text text text text</div>
          <div>text text text text text text</div>
          <div>text text text</div>
        </div>
        <div class="top__topic--button">
          <button @click="linkToMain">WikiQuizに挑む</button>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about__topic">About</div>
      <div class="about__contents">
        <div class="about__text">
          <div class="about__text--main">text text text text text text</div>
          <div class="about__text--sub">
            <div>text text text text text</div>
            <div>text text text text</div>
            <div>text text text text text</div>
          </div>
          <div class="about__text--sub">
            <div>text text text text text</div>
            <div>text text text text</div>
            <div>text text text text text</div>
          </div>
          <div class="about__button"><button>more</button></div>
        </div>
        <div class="about__image">
          <div
            style="
              height: 300px;
              width: 400px;
              background-color: rgb(214, 214, 149);
            "
          ></div>
        </div>
      </div>
    </section>
    <section class="section-footer">
      <div class="section-footer__button">
        <button @click="linkToMain">WikiQuizに挑む</button>
      </div>
    </section>
    <section class="howto">
      <div class="howto__topic">HowTo</div>
      <div class="howto__contents">
        <!-- ここはコンポーネントで切り出す -->
        <div class="howto__section howto__section--one">
          <div class="howto__section--topic">①考える。</div>
          <div class="howto__section--image"></div>
          <div class="howto__section--subtopic">
            text text text text text text text text
          </div>
        </div>
        <div class="howto__section howto__section--two">
          <div class="howto__section--topic">②もっと考える。</div>
          <div class="howto__section--image"></div>
          <div class="howto__section--subtopic">
            text text text text text text text text
          </div>
        </div>
        <div class="howto__section howto__section--three">
          <div class="howto__section--topic">③発見する。</div>
          <div class="howto__section--image"></div>
          <div class="howto__section--subtopic">
            text text text text text text text text
          </div>
        </div>
        <div class="howto__section howto__section--four">
          <div class="howto__section--topic">④世界が広がる。</div>
          <div class="howto__section--image"></div>
          <div class="howto__section--subtopic">
            text text text text text text text text
          </div>
        </div>
      </div>
    </section>
    <!-- ここはコンポーネントで切り出す -->
    <section class="section-footer">
      <div class="section-footer__button">
        <button @click="linkToMain">WikiQuizに挑む</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    linkToMain() {
      this.$router.push("/start");
    },
  },
};
</script>

<style lang="scss" scoped>
$border-size: 2.5px;
@import "../stylesheets/home";
</style>
