<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
</style>
