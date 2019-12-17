<template>
  <div class="theme-default-content">
    <div>
      <CoursePageLecturer
        v-for="lecturer of lecturers"
        :key="lecturer.regularPath"
        :lecturer="lecturer"
      />
    </div>
  </div>
</template>

<script>
import CoursePageLecturer from "@theme/components/course/page/CoursePageLecturer.vue";
export default {
  name: "CoursePageLecturers",
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CoursePageLecturer
  },
  computed: {
    lecturers() {
      return this.pages.lecturers;
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-default-content:not(.custom) {
  > *:first-child {
    margin-top: 0 !important;
  }
}
</style>