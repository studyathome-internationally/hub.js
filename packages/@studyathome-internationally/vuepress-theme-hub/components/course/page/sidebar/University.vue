<template>
  <section v-if="excerpt" class="university">
    <h2 id="university"><a href="#university" class="header-anchor">#</a>University</h2>
    <div class="university">
      <div class="preview" v-html="excerpt"></div>
      <router-link :to="path">Read more.</router-link>
    </div>
  </section>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "University",
  computed: {
    university() {
      return this.$site.pages.find(
        ({ regularPath }) => regularPath === this.$frontmatter.university.page
      );
    },
    title() {
      return get(["university", "frontmatter", "title"], this) || "";
    },
    excerpt() {
      return get(["university", "excerpt"], this) || "";
    },
    path() {
      return get(["university", "regularPath"], this) || "";
    },
  },
};
</script>

<style lang="stylus">
.university > div
  text-align justify

.preview
  img
    width 100%
</style>
<style lang="stylus" scoped>
@media (max-width: ($courseContentWidth + $courseSidebarWidth))
  p
    text-align unset
</style>
