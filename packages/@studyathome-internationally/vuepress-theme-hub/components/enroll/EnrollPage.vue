<template>
  <div class="theme-default-content">
    <Content />
    <JoinButton :enrollment="$frontmatter.enrollment" />
  </div>
</template>

<script>
import JoinButton from "@theme/components/enroll/JoinButton.vue";
export default {
  components: { JoinButton }
};
</script>

<style lang="stylus"></style>