export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    page() {
      return this.$site.pages.find(({ regularPath }) => this.path === regularPath);
    },
  },
};
