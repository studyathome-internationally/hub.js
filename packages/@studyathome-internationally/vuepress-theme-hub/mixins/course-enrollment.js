import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["enrollment"]),
    course() {
      return this.enrollment.course
        ? this.$site.pages.find(({ title }) => title === this.enrollment.course) || false
        : false;
    },
    host() {
      return this.course ? this.course.frontmatter.university.page : "";
    },
  },
};
