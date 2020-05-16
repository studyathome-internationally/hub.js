<template>
  <div class="theme-default-content">
    <Overview />
    <Content />
  </div>
</template>

<script>
import Overview from "@theme/components/lecturer/page/Overview.vue";
export default {
  name: "Contents",
  components: { Overview },
};
</script>

<style lang="stylus">
.lecturer .content__default h1
  display none
</style>
