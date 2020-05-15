<template>
  <div class="course-content">
    <Content />
    <Sidebar class="course-sidebar" />
  </div>
</template>

<script>
import Sidebar from "@theme/components/course/page/Sidebar.vue";
export default {
  name: "Main",
  components: { Sidebar },
};
</script>

<style lang="stylus">

h1, h2, h3, h4, h5, h6
  .content__default > &, .course .course-sidebar > section > &, .preview &
    margin-top (0.5rem - $navbarHeight)
    padding-top ($navbarHeight + 1rem)
    margin-bottom 0


  .content__default > &:first-child, .course-sidebar section:first-child &
    + p, + pre, + .custom-block
      margin-top 2rem

.lecturer img
  margin-top (0.5rem - $navbarHeight)
  padding-top ($navbarHeight + 1rem)
  margin-bottom 0
</style>
<style lang="stylus" scoped>

.course-content
  margin auto
  max-width ($contentWidth*2)px
  div
    padding 2rem 2.5rem
  .course:not(.no-side) &
    display flex
    flex-flow row nowrap
    justify-content space-between
    .content__default
      width $courseContentWidth
    .course-sidebar
      width $courseSidebarWidth
      border 1px solid $borderColor
      border-radius 5px
      box-shadow 1px 1px 4px 1px darken($borderColor,25%)

.no-side
  .content__default
    padding-bottom 0
  .course-sidebar
    padding-top 0
</style>
