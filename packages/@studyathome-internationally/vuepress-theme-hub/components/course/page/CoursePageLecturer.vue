<template>
  <div v-html="subHeading(lecturer.excerpt)"></div>
</template>

<script>
import { subHeading } from "@theme/utils/page.js";
export default {
  name: "CoursePageLecturers",
  props: {
    lecturer: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    subHeading: subHeading
  }
};
</script>

<style lang="scss" scoped>
</style>