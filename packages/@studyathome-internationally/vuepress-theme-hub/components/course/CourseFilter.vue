<template>
  <div class="course-filter">
    <University @update="onUpdateUniversity" :universities="filterData.universities" />
  </div>
</template>

<script>
import University from "@theme/components/course/filter/University.vue";

export default {
  name: "CourseFilter",
  components: { University },
  props: {
    filterData: {
      type: Object,
      reqired: true,
    },
  },
  methods: {
    onUpdateUniversity(universities) {
      this.$emit("update-filter-university", universities);
    },
  },
};
</script>

<style lang="stylus" scoped>
.course-filter
  margin 0.4rem
</style>
