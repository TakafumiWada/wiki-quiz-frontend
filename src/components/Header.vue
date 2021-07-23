<template>
  <header>
    <div class="icon__container" @click="linkToTop">
      <div class="icon__content"></div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    linkToTop() {
      if (
        this.$router.currentRoute.name === "Home" &&
        this.$router.currentRoute.hash === "#top"
      )
        return;
      this.$router.push({ path: "/", hash: "#top" });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  &__container {
    position: fixed;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: #ffffffb3;
    cursor: pointer;
  }
  &__content {
    height: 60px;
    width: 120px;
    margin: 0 15px;
    z-index: 100;
    background-image: url(../../public/images/QuizWiki_Logo.png);
    background-size: cover;
  }
}
</style>
