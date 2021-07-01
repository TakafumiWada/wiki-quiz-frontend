<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
}
</style>
