<template>
  <section class="start">
    <div class="start__text">text text text text</div>
    <div class="start__button"><button @click="clickEnter">enter</button></div>
  </section>
</template>

<script>
export default {
  methods: {
    clickEnter() {
      this.$router.push("/main");
    },
  },
};
</script>

<style lang="scss" scoped>
.start {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
