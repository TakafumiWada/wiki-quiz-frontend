<template>
  <footer class="footer">
    <div class="footer__contents">
      <div class="footer__topic">WikiQuiz</div>
      <div class="footer__links">
        <div class="footer__link">
          <router-link :to="{ path: '/', hash: '#top' }">TOP</router-link>
        </div>
        <div class="footer__link footer__link--border-left">
          <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
        </div>
        <div class="footer__link footer__link--border-left">
          <router-link :to="{ path: '/', hash: '#howto' }">HowTo</router-link>
        </div>
        <div class="footer__link footer__link--border-left">
          <router-link :to="{ path: '/start' }">クイズに挑む</router-link>
        </div>
      </div>
      <div class="footer__icons">
        <div
          class="footer__icon footer__icon--twitter"
          @click="linkToTwitter"
        ></div>
        <div
          class="footer__icon footer__icon--facebook"
          @click="linkToFacebook"
        ></div>
        <div class="footer__icon footer__icon--note" @click="linkToNote"></div>
      </div>
    </div>
    <div class="footer__copyright">
      &copy;2021 TakafumiWada All right reserved
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    linkToTwitter() {
      window.open("https://twitter.com/wdtk2525", "_blank");
    },
    linkToFacebook() {
      window.open("https://www.facebook.com/takafumi.wada.528/", "_blank");
    },
    linkToNote() {
      window.open("https://note.com/wadeee", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 35vh;
  width: 100vw;
  background-color: $foot-color;
  color: white;
  font-family: $noto-sans;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &__contents {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__links {
    display: flex;
  }

  &__icons {
    display: flex;
  }
}

.footer__topic {
  font-size: 50px;
  margin-top: 4vh;
  margin-bottom: 1vh;
  font-family: $traviraj;
}

.footer__link {
  font-size: 20px;
  height: 28px;
  width: 150px;
  text-align: center;
  font-family: $noto-sans;
  &--border-left {
    border-left: 1px solid;
    border-color: white;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: white;
  }
}

.footer__icon {
  padding: 3vh 3vh;
  margin: 3vh 3vh;
  cursor: pointer;
  &--twitter {
    background-image: url(../../public/images/footer_twitter.png);
    background-size: cover;
  }
  &--facebook {
    background-image: url(../../public/images/footer_facebook.png);
    background-size: cover;
  }
  &--note {
    background-image: url(../../public/images/footer_note.png);
    background-size: cover;
  }
}

.footer__copyright {
  font-family: $traviraj;
  margin-bottom: 1vh;
}
</style>
