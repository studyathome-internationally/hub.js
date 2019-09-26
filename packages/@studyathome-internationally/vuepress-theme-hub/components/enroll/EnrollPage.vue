<template>
  <div class="theme-default-content">
    <Content />
    <JoinButton :enrollment="$frontmatter.enrollment" :course="course" />
  </div>
</template>

<script>
import JoinButton from "@theme/components/enroll/JoinButton.vue";
export default {
  components: { JoinButton },
  props: {
    course: {
      type: String,
      require: true
    }
  },
  computed: {}
};
</script>

<style lang="stylus"></style>