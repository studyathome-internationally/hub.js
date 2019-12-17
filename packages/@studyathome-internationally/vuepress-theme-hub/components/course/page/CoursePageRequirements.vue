<template>
  <div class="theme-default-content">
    <div v-html="requirements"></div>
    <CoursePageEditLink :pages="pages" page="assessment" />
  </div>
</template>

<script>
import CoursePageEditLink from "@theme/components/course/page/CoursePageEditLink.vue";
export default {
  name: "CoursePageRequirements",
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  components: { CoursePageEditLink },
  computed: {
    requirements() {
      return this.pages.requirements.excerpt;
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