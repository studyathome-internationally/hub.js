<template>
  <div v-if="experience.length > 0">
    <div class="title">Experience</div>
    <ul>
      <li v-for="e of experience" :key="e">{{ e }}</li>
    </ul>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
export default {
  name: "Experience",
  computed: {
    experience() {
      return get(["$frontmatter", "experience"], this) || [];
    },
  },
};
</script>

<style lang="stylus" scoped>
.title
  background-color $accentColor
  border-radius 5px
  color white
  padding 0.25rem
  padding-left 0.5rem
  font-size 1rem
  font-weight 500
  margin-bottom 0.5rem
</style>
