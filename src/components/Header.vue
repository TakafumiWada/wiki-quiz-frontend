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
    font-family: $traviraj;
    font-weight: 400;
    margin: 5px 20px;
    font-size: 40px;
    letter-spacing: 0.9px;
  }
}
</style>
