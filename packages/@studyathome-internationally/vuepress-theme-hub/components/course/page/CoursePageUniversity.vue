<template>
  <div class="theme-default-content">
    <div v-html="university"></div>
  </div>
</template>

<script>
import { subHeading } from "@theme/utils/page.js";
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
      return subHeading(this.pages.university.excerpt);
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