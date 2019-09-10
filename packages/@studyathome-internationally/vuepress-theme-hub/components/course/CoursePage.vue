<template>
  <div class="theme-default-content">
    <Content />
    <!-- TODO: test if enrollment is possible / link pushable -->
    <EnrollButton />
  </div>
</template>

<script>
import EnrollButton from "@theme/components/enroll/EnrollButton.vue";
export default {
  components: {
    EnrollButton
  }
};
</script>

<style lang="stylus"></style>