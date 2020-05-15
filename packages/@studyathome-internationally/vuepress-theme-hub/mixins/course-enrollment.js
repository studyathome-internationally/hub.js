export default {
  computed: {
    course() {
      return this.$route.query.course
        ? this.$site.pages.find(({ title }) => title === this.$route.query.course) || false
        : false;
    },
    host() {
      return this.course ? this.course.frontmatter.university.page : "";
    },
  },
};
