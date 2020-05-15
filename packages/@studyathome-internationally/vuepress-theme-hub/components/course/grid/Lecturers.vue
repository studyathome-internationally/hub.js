<template>
  <div class="lecturers">
    <div v-for="{ title } of lecturers" :key="title">{{ title }}</div>
  </div>
</template>

<script>
import course from "@theme/mixins/course.js";

export default {
  name: "Lecturers",
  mixins: [course],
  computed: {
    lecturers() {
      return this.$site.pages.filter(({ regularPath }) =>
        this.page.frontmatter.lecturers.includes(regularPath)
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.lecturers
  // padding 0 0.25rem
  margin-top 0.5rem
  height 2.4rem
  font-size 0.75rem
  display flex
  flex-flow row wrap
  justify-content space-between
  div
    line-height 1rem
    color darken($borderColor,60%)
    width 50%
    &:nth-child(2n)
      text-align right
</style>
