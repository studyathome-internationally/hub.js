<template>
  <div class="disclaimer">
    <details class="hub" :open="open">
      <summary>
        <span>
          {{ title }}
        </span>
        <font-awesome-icon icon="angle-double-down"></font-awesome-icon>
      </summary>
      <hr />
      <slot></slot>
      <template v-if="Boolean(course)">
        <hr />
        <div v-html="hostDisclaimer"></div>
      </template>
    </details>
    <div class="confirmation">
      <hr />
      <div>
        <input type="checkbox" id="disclaimer-confirmation" v-model="confirm" />
        <label for="disclaimer-confirmation">
          <Content slot-key="confirmation" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import course from "@theme/mixins/course-enrollment.js";

export default {
  name: "Disclaimer",
  mixins: [course],
  props: {
    title: {
      type: String,
      default: "Privacy Information",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
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
.hub
  background-color unset
  border unset
  margin-block-start unset
  margin-block-end unset

.disclaimer
  background-color alpha(lighten($accentColor,30%),20%)
  border 1px solid lighten($accentColor,30%)
  border-radius .25rem
  margin-block-start 0.5rem
  margin-block-end 0.5rem

.confirmation
  padding 0 1rem 0.5rem 1rem
  hr
    margin-block-start 0
  & > div
    display inline-flex
    input
      margin 0.5rem
hr
  border-top 1px solid $accentColor
</style>
<style lang="stylus">
.content__confirmation p
  margin-block-start 0
  margin-block-end 0
</style>
