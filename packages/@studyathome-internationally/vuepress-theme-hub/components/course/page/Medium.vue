<template>
  <div class="course-media">
    <Media :content="media" :zoom="false" />
    <Description />
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Media from "@theme/components/general/Media.vue";
import Description from "@theme/components/course/page/media/Description.vue";

export default {
  name: "Medium",
  components: { Media, Description },
  computed: {
    media() {
      return (
        get(["$frontmatter", "media", "description", "src"], this) ||
        get(["$frontmatter", "media", "main", "src"], this) ||
        ""
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.course-media
  // background-color lighten(black,40%)
  border 1px solid $borderColor
  border-radius 5px
  box-shadow 1px 1px 4px 1px darken($borderColor,25%)
  display flex
  flex-flow row nowrap
  div
    flex 1 1 50%
    &:nth-child(2)
      padding 2rem 2.5rem

@media (max-width: $courseContentWidth + $courseSidebarWidth)
  .course-media
    margin 2rem 2.5rem
    div:first-child
      flex 1 1 70%

@media (max-width: $courseContentWidth)
  .course-media
    flex-flow column nowrap
    div
      padding 2rem 2.5rem
      &:first-child
        margin-top 2rem
        flex 1 1 50%
        padding 0 2.5rem 0 2.5rem
        height calc((100vw - 5rem) * 9 / 16)
</style>
