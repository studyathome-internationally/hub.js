<template>
  <div>
    <Youtube v-if="hasYoutube" :id="$frontmatter.media.video.youtube" />
  </div>
</template>

<script>
import Youtube from "@theme/components/course/page/overview/video/Youtube.vue";

export default {
  name: "CoursePageOverviewVideo",
  components: { Youtube },
  computed: {
    hasYoutube() {
      const { youtube } = this.$frontmatter.media.video;
      return typeof youtube !== "undefined" && youtube !== null;
    }
  }
};
</script>

<style lang="stylus" scoped></style>