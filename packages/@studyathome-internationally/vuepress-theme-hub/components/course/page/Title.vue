<template>
  <div class="course-title">
    <h1 id="title">{{ title }}</h1>
    <div class="lecturers">
      <span v-for="lecturer of lecturers" :key="lecturer">{{ lecturer }}</span>
    </div>
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
    lecturers() {
      return get(["$frontmatter", "lecturers"], this)
        .map((lecturerPath) => this.$site.pages.find(({ regularPath }) => regularPath === lecturerPath))
        .map(({ title }) => title);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
