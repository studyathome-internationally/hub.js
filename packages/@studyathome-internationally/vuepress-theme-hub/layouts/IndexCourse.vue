<template>
  <ParentLayout>
    <div slot="page-top">
      <div class="theme-default-content">
        <CourseCards />
      </div>
    </div>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
export default {
  components: {
    ParentLayout
  }
};
</script>

<style lang="stylus" scoped>
// .theme-default-content {
//   max-width: 75vw !important;
// }
</style>