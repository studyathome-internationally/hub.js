<template>
  <div>
    <CourseFilter :filterData="filterData" @update-filter-university="onUpdateUniversityFilter" />
    <ul class="grid">
      <Course v-for="page of filteredCoursePages" :key="page" :path="page" />
    </ul>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
import { convertDate } from "@theme/utils/date.js";

import CourseFilter from "@theme/components/course/CourseFilter.vue";
import Course from "@theme/components/course/Course.vue";

export default {
  name: "Courses",
  components: { CourseFilter, Course },
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
  data() {
    return {
      universities: [],
      filterData: {
        universities: [],
      },
    };
  },
  computed: {
    index() {
      return this.path ? this.page(this.path).frontmatter.indexed : this.$frontmatter.indexed;
    },
    coursePages() {
      return this.$site.pages
        .filter(({ regularPath, frontmatter }) => frontmatter.state && this.index.includes(regularPath))
        .filter(({ frontmatter }) => (this.winter ? frontmatter.semester === "Winter" : true))
        .filter(({ frontmatter }) => (this.summer ? frontmatter.semester === "Summer" : true))
        .sort(compare(this.sort))
        .map(({ regularPath }) => regularPath);
    },
    filteredCoursePages() {
      return this.coursePages.filter(this.filter);
    },
  },
  methods: {
    page(path) {
      return this.$site.pages.find(({ regularPath }) => regularPath === path);
    },
    onUpdateUniversityFilter(universities) {
      this.universities = universities;
    },
    filter(path) {
      const page = this.$site.pages.find(({ regularPath }) => path === regularPath);
      if (page.frontmatter && page.frontmatter && page.frontmatter.university) {
        if (!this.universities.includes(page.frontmatter.university.page)) return false;
      }
      return true;
    },
  },
  created() {
    this.universities = this.$site.pages
      .filter(
        ({ regularPath }) =>
          regularPath.startsWith("/studyathome/partner/") &&
          regularPath.endsWith("/") &&
          regularPath !== "/studyathome/partner/"
      )
      .map(({ regularPath }) => regularPath);
    const availableUniversities = this.coursePages
      .map((path) => this.$site.pages.find(({ regularPath }) => path === regularPath))
      .filter((page) => page && page.frontmatter && page.frontmatter.university)
      .map(({ frontmatter }) => frontmatter.university.page)
      .filter((value, index, self) => self.indexOf(value) === index);

    this.filterData.universities = this.universities.map((path) => ({
      path,
      available: availableUniversities.includes(path),
    }));
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
