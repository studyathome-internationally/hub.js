<template>
  <div class="theme-default-content">
    <Content />
    <EnrollSection :course="$page.regularPath" />
  </div>
</template>

<script>
import EnrollSection from "@theme/components/enroll/EnrollSection.vue";
export default {
  components: {
    EnrollSection
  }
};
</script>

<style lang="stylus"></style>