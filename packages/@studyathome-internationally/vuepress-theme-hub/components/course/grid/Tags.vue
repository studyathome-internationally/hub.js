<template>
  <div class="tags">
    <span v-for="tag of tags" :key="tag">{{ tag }}</span>
  </div>
</template>

<script>
import course from "@theme/mixins/course.js";

export default {
  name: "Tags",
  mixins: [course],
  computed: {
    tags() {
      return this.page.frontmatter.tags;
    },
  },
};
</script>

<style lang="stylus" scoped>
.tags
  border-top 2px solid darken(gold,30%)
  margin-bottom 0.5rem
  line-height 1rem
  height 3rem
  display flex
  flex-flow row wrap
  span
    height 1rem
    margin-top 0.25rem
    font-size 0.75rem
    padding 0.15rem 0.2rem
    border-radius 2px
    margin-right 3px
    background-color lighten($accentColor,40%)
    color white
    white-space nowrap
    &:last-child
      margin-right 0
</style>
