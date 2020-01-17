<template>
  <div class="theme-default-content">
    <div v-html="university"></div>
  </div>
</template>

<script>
import { subHeading, withBase, video } from "@theme/utils/page.js";
export default {
  name: "CoursePageUniversity",
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    university() {
      return withBase(
        video(subHeading(this.pages.university.excerpt)),
        this.$site.base
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-default-content:not(.custom) {
  > *:first-child {
    margin-top: 0 !important;
  }
}
</style>
