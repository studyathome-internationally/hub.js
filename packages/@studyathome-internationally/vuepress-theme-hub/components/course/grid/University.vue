<template>
  <div class="university">
    <div>{{ host.title }}</div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
import course from "@theme/mixins/course.js";

export default {
  name: "University",
  mixins: [course],
  computed: {
    host() {
      return this.$site.pages.find(
        ({ regularPath }) =>
          regularPath === get(["page", "frontmatter", "university", "page"], this)
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.university
  font-size 0.75rem
  div
    line-height 1rem
    color lighten($accentColor, 20%)
</style>
