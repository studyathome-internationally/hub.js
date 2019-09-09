<template>
  <div class="theme-default-content">
    <Content />
    <!-- TODO: test if enrollment is possible / link pushable -->
    <Enroll />
  </div>
</template>

<script>
import Enroll from "@theme/components/course/Enroll.vue";
export default {
  components: {
    Enroll
  }
};
</script>

<style lang="stylus"></style>