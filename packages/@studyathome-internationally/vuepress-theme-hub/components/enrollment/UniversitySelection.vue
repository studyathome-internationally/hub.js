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
      selection: "",
    };
  },
  computed: {
    universities() {
      return this.$site.pages.filter(
        ({ regularPath }) =>
          /^\/studyathome\/partner\/.*?\/$/.exec(regularPath) && regularPath !== this.host
      );
    },
  },
  watch: {
    selection(newValue, oldValue) {
      const { course, home } = this.$route.query;
      if (newValue !== home) {
        this.$router.replace({
          path: this.$route.path,
          query: { course, home: newValue },
        });
      }
    },
    universities(newValue, oldValue) {
      if (!newValue.map(({ title }) => title).includes(this.selection)) {
        this.selection = "";
      }
    },
  },
  created() {
    this.selection = this.$route.query.home || "";
  },
};
</script>

<style lang="stylus" scoped>
select
  width 100%
</style>
