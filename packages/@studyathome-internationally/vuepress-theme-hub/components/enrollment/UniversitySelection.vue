<template>
  <div id="university-select" class="select">
    <select v-model="selection">
      <option value="">{{ placeholder }}</option>
      <option
        v-for="university of universities"
        :key="university.title"
        :value="university.title"
        >{{ university.title }}</option
      >
    </select>
    <font-awesome-icon class="icon" icon="angle-down"></font-awesome-icon>
  </div>
</template>

<script>
import { mapState } from "vuex";
import course from "@theme/mixins/course-enrollment.js";

export default {
  name: "UniversitySelection",
  mixins: [course],
  props: {
    placeholder: {
      type: String,
      default: "-- Please choose your home university --",
    },
  },
  data() {
    return {
      universities: [],
    };
  },
  computed: {
    ...mapState(["enrollment"]),
    courseSelection() {
      return this.enrollment.course;
    },
    selection: {
      get() {
        return this.enrollment.home;
      },
      set(home) {
        this.$store.commit("updateHomeUniversity", home);
        this.$route.query.home = home;
        this.updateLocation(this.$route.query.course, home);
      },
    },
  },
  watch: {
    courseSelection(newValue, oldValue) {
      const course = newValue.course;
      this.universities = this.loadHomeUniversities();
      if (!this.universities.map(({ title }) => title).includes(this.enrollment.home)) {
        this.selection = "";
      }
    },
  },
  methods: {
    updateLocation(course = "", home = "") {
      const search = `?course=${course}&home=${home}`;
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", this.$route.path + search);
      }
    },
    loadHomeUniversities() {
      return this.$site.pages.filter(
        ({ regularPath }) =>
          /^\/studyathome\/partner\/.*?\/$/.exec(regularPath) && regularPath !== this.host
      );
    },
  },
  created() {
    this.selection = this.$route.query.home || "";
    this.universities = this.loadHomeUniversities();
  },
};
</script>

<style lang="stylus" scoped>
select
  width 100%
</style>
