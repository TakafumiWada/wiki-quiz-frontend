<template>
  <header>
    <div class="icon__container" @click="linkToTop">
      <div class="icon__content">WikiQuiz</div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    linkToTop() {
      if (this.$router.currentRoute.name === "Home") return;
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: rgba(221, 221, 221, 0.5);
    cursor: pointer;
  }
  &__content {
    margin: 5px 10px;
    font-size: 30px;
  }
}
</style>
