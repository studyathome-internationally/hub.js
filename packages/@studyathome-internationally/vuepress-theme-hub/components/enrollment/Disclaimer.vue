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
        <div v-html="disclaimer"></div>
      </template>
    </details>
  </div>
</template>

<script>
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
  data() {
    return {
      disclaimer: "",
    };
  },
  methods: {
    loadDisclaimer(host) {
      const page = this.$site.pages.find(
        ({ regularPath }) => regularPath === host + "disclaimer.html"
      );
      return page ? page.excerpt : "";
    },
  },
  watch: {
    host(newValue, oldValue) {
      this.disclaimer = this.loadDisclaimer(newValue);
      this.$store.commit("updateEnrollmentDisclaimer", false);
    },
  },
  created() {
    this.disclaimer = this.loadDisclaimer(this.host);
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
</style>
<style lang="stylus"></style>
