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
  data() {
    return {
      selection: "",
    };
  },
  computed: {
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
  },
  watch: {
    selection(newValue, oldValue) {
      const { course, home } = this.$route.query;
      if (newValue !== course) {
        this.$router.replace({
          path: this.$route.path,
          query: { course: newValue, home },
        });
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
