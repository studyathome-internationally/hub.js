export default {
  data() {
    return {
      width: 0,
    };
  },

  computed: {
    side() {
      // palette.styl ($courseContentWidth, $courseSidebarWidth)
      return this.width >= 940 + 400;
    },
  },

  mounted() {
    if (typeof window !== "undefined") {
      this.$nextTick(() => window.addEventListener("resize", this.onResize));
      this.onResize();
    }
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize);
    }
  },

  methods: {
    onResize() {
      if (typeof window !== "undefined") {
        this.width = window.innerWidth;
      }
    },
  },
};
