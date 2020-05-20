<template>
  <div class="course-title">
    <h1 id="title">{{ title }}</h1>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Title",
  computed: {
    title() {
      return get(["$page", "title"], this) || "";
    },
    lecturer() {
      return get(["$frontmatter", "lecturers", 0], this) || "";
    },
    page() {
      return this.$site.pages.find(({ regularPath }) => regularPath === this.lecturer);
    },
    name() {
      return get(["page", "title"], this) || "";
    },
  },
};
</script>

<style lang="stylus" scoped></style>
