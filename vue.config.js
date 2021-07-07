module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/stylesheets/global.scss";`, //グローバルで読みたいファイル名
      },
    },
  },
};
