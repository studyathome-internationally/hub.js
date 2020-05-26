<template>
  <div id="cookie-consent" v-if="!cookie.consent">
    <p>
      <span>
        This website uses cookies to ensure you get the best experience on our website.
        <router-link to="/studyathome/about.html">Learn more</router-link>
        <button @click="onClick">Got it!</button>
      </span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CookieConsent",
  computed: {
    ...mapState(["cookie"]),
  },
  methods: {
    onClick() {
      this.$store.commit("consentToCookies");
      this.$store.commit("save");
    },
  },
  beforeMount() {
    this.$store.commit("load");
  },
};
</script>

<style lang="stylus" scoped>
#cookie-consent
  position fixed
  z-index 25
  width 100%
  min-height 90px
  bottom 0
  padding 0 1rem
  border-top 1px solid $accentColor
  background white
  text-align center
  line-height 90px
  p
    display inline-block
    text-align left
  button
    cursor pointer
    appearance none
    border none
    background-color $accentColor
    color white
    font-size 1rem
    margin-left 0.5rem
    padding 0.25rem 0.5rem
    border-radius 5px
    box-shadow 1px 1px 4px 1px darken($borderColor, 40%)
</style>
