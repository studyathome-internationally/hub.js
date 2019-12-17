<template>
  <div>
    <CoursePageOverviewVideo v-if="hasVideo" />
    <CoursePageOverviewImage v-else />
  </div>
</template>

<script>
import CoursePageOverviewVideo from "@theme/components/course/page/overview/CoursePageOverviewVideo.vue";
import CoursePageOverviewImage from "@theme/components/course/page/overview/CoursePageOverviewImage.vue";

export default {
  name: "CoursePageOverviewMedia",
  components: {
    CoursePageOverviewVideo,
    CoursePageOverviewImage
  },
  computed: {
    hasVideo() {
      const { video } = this.$frontmatter.media;
      return typeof video !== "undefined" && video !== null;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>