<template>
  <div class="main">
    <div><button @click="clickPlay">Play</button></div>
    <div>{{ articleData }}</div>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed: {
    articleData() {
      return this.$store.state.articleData;
    },
    selectedWords() {
      return this.$store.state.selectedWords;
    },
  },
  methods: {
    clickPlay() {
      this.$store.dispatch("getArticleData");
    },
  },
};
</script>
