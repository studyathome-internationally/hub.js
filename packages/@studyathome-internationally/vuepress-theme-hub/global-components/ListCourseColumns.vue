<template>
  <b-card-group columns>
    <ListCourseEntry v-for="course of courses" :key="course.path" :course-data="course" />
  </b-card-group>
</template>

<script>
import ListCourseEntry from "@theme/components/ListCourseEntry.vue";

export default {
  components: {
    ListCourseEntry
  },
  props: {
    path: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    courses: function() {
      return this.$site.pages.filter(({ path }) => {
        const basePath = this.path || this.$route.path;
        const r = new RegExp("^" + basePath);
        return path !== basePath && r.exec(path);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>