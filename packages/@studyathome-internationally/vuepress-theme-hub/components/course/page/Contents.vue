<template>
  <div class="course" :class="{ 'no-side': !side }">
    <Title class="title" />
    <div class="content">
      <Medium />
      <Main />
    </div>
  </div>
</template>

<script>
import Title from "@theme/components/course/page/Title.vue";
import Medium from "@theme/components/course/page/Medium.vue";
import Main from "@theme/components/course/page/Main.vue";

import sidebar from "@theme/mixins/course-sidebar.js";

export default {
  name: "CoursePage",
  components: { Title, Medium, Main },
  mixins: [sidebar],
};
</script>

<style lang="stylus" scoped>
.course
  .title
    padding 2rem 2.5rem
  .content
    max-width ($courseContentWidth + $courseSidebarWidth)px
    margin auto
    div:first-child
      margin-bottom 2rem
</style>
