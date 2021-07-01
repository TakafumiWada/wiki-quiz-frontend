<template>
  <div>
    <!-- <div><button @click="linkToMain">WikiQuizに挑む</button></div> -->
    <section class="top">
      <div class="top__topic">
        <div class="top__topic--main">WikiQuiz</div>
        <div class="top__topic--sub">
          <div>text text text text text text</div>
          <div>text text text text text text</div>
          <div>text text text</div>
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
        <div class="about__image"><img src="" alt="" /></div>
      </div>
    </section>
    <section class="howto"></section>
  </div>
</template>

<script>
export default {
  methods: {
    linkToMain() {
      this.$router.push("/main");
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  &__topic {
    position: absolute;
    top: 50%;
    left: 10%;
    &--main {
      margin: 20px 0;
      font-size: 5em;
      font-weight: 600;
    }
    &--sub {
      font-size: 1.2em;
    }
  }
}
.about {
  height: 90vh;
  width: 100vw;
  background-color: beige;
}
</style>
