<template>
  <section v-if="excerpt" class="university">
    <h2 id="university"><a href="#university" class="header-anchor">#</a>University</h2>
    <div class="university">
      <div class="preview" v-html="processedExcerpt"></div>
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
    processedExcerpt() {
      return this.excerpt
        .replace(":src", "src")
        .replace(/\$withBase\('\/(.*?)'\)/g, (m, url) => this.$site.base + url);
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
