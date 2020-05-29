<template>
  <div class="confirmation">
    <div>
      <input type="checkbox" id="disclaimer-confirmation" v-model="confirm" />
    </div>
    <label for="disclaimer-confirmation">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";
import course from "@theme/mixins/course-enrollment.js";

export default {
  name: "Confirmation",
  computed: {
    ...mapState(["enrollment"]),
    hostDisclaimer() {
      return this.$site.pages.find(
        ({ regularPath }) => regularPath === this.host + "disclaimer.html"
      ).excerpt;
    },
    confirm: {
      get() {
        return this.enrollment.disclaimer;
      },
      set(value) {
        this.$store.commit("updateEnrollmentDisclaimer", value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.confirmation
  display flex
  background-color alpha($borderColor,40%)
  border 1px solid darken($borderColor,40%)
  box-shadow 1px 1px 4px -1px alpha($borderColor,80%)
  padding .75rem 1.25rem .75rem 0
  border-radius .25rem
  div:first-child
    margin auto 0
  input
    margin 1rem
  label p
    margin-block-start 0
    margin-block-end 0
</style>
