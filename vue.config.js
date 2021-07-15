module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "QuizWiki",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/stylesheets/global.scss";`, //グローバルで読みたいファイル名
      },
    },
  },
};
