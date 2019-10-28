<template>
  <div class="theme-default-content">
    <Content />
    <EnrollSection :course="$page.regularPath" />
  </div>
</template>

<script>
import EnrollSection from "@theme/components/enrollment/EnrollmentSection.vue";
export default {
  name: "CoursePage",
  components: {
    EnrollSection
  }
};
</script>

<style lang="stylus"></style>