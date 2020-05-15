<template>
  <div>{{ title }}</div>
</template>

<script>
import course from "@theme/mixins/course.js";

export default {
  name: "Title",
  mixins: [course],
  computed: {
    title() {
      return this.page.title;
    },
  },
};
</script>

<style lang="stylus" scoped>
div
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  font-weight 600
  margin-top 0.75rem
</style>
