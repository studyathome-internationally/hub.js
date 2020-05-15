<template>
  <ul class="grid">
    <Course v-for="page of pages" :key="page" :path="page" />
  </ul>
</template>

<script>
import { get } from "@theme/utils/object.js";
import { convertDate } from "@theme/utils/date.js";

import Course from "@theme/components/course/Course.vue";

export default {
  name: "Courses",
  components: { Course },
  props: {
    path: {
      type: String,
      default: null,
    },
    winter: {
      type: Boolean,
      default: false,
    },
    summer: {
      type: Boolean,
      default: false,
    },
    sort: {
      type: String,
      default: null,
      validator: (value) => ["date", "name"].indexOf(value) !== -1,
    },
  },
  computed: {
    index() {
      return this.path ? this.page(this.path).frontmatter.indexed : this.$frontmatter.indexed;
    },
    pages() {
      return this.$site.pages
        .filter(
          ({ regularPath, frontmatter }) => frontmatter.state && this.index.includes(regularPath)
        )
        .filter(({ frontmatter }) => (this.winter ? frontmatter.semester === "Winter" : true))
        .filter(({ frontmatter }) => (this.summer ? frontmatter.semester === "Summer" : true))
        .sort(compare(this.sort))
        .map(({ regularPath }) => regularPath);
    },
  },
  methods: {
    page(path) {
      return this.$site.pages.find(({ regularPath }) => regularPath === path);
    },
  },
};

function compare(criterion) {
  let compareFunc = (a, b) => -1;
  if (criterion === "date") {
    compareFunc = (a, b) => {
      const startA = convertDate(get(["frontmatter", "schedule", "start"], a));
      const startB = convertDate(get(["frontmatter", "schedule", "start"], b));
      const dateA = new Date(startA.year, startA.month - 1, startA.day);
      const dateB = new Date(startB.year, startB.month - 1, startB.day);
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    };
  } else if (criterion === "name") {
    compareFunc = (a, b) => {
      return a.title.localeCompare(b.title);
    };
  }
  return compareFunc;
}
</script>

<style lang="stylus" scoped>
.grid
  list-style-type none
  padding-left 0

  display flex
  flex-flow row wrap
</style>
