<template>
  <div id="course-select" class="select">
    <select v-model="selection">
      <option value="">{{ placeholder }}</option>
      <option v-for="course of courses" :key="course.title" :value="course.title">{{
        course.title
      }}</option>
    </select>
    <font-awesome-icon class="icon" icon="angle-down"></font-awesome-icon>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CourseSelection",
  props: {
    path: {
      type: String,
      default: "/courses/",
    },
    placeholder: {
      type: String,
      default: "-- Please choose a course --",
    },
  },
  computed: {
    ...mapState(["enrollment"]),
    index() {
      return this.$site.pages.find(({ regularPath }) => regularPath === this.path)
        .frontmatter.indexed;
    },
    courses() {
      return this.$site.pages.filter(
        ({ regularPath, frontmatter }) =>
          frontmatter.state && frontmatter.enrollment && this.index.includes(regularPath)
      );
    },
    selection: {
      get() {
        return this.enrollment.course;
      },
      set(course) {
        this.$store.commit("updateCourse", course);
        this.$route.query.course = course;
        this.updateLocation(course, this.$route.query.home);
      },
    },
  },
  methods: {
    updateLocation(course = "", home = "") {
      const search = `?course=${course}&home=${home}`;
      if (typeof window !== "undefined") {
        window.history.replaceState(
          null,
          "",
          this.$site.base.replace(/\/$/, "") + this.$route.path + search
        );
      }
    },
  },
  created() {
    this.selection = this.$route.query.course || "";
  },
};
</script>

<style lang="stylus" scoped>
select
  width 100%
</style>
