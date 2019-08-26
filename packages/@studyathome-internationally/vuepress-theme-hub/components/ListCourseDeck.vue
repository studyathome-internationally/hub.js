<template>
  <b-card-group deck>
    <ListCourseEntry v-for="course of courses" :key="course.path" :course-data="course" />
  </b-card-group>
</template>

<script>
import ListCourseEntry from "@theme/components/ListCourseEntry.vue";

export default {
  props: {
    courses: Array
  },
  components: {
    ListCourseEntry
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>