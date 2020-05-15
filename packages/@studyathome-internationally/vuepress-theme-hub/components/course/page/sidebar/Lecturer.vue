<template>
  <div class="lecturer">
    <div>
      <img
        :style="{
          float: left ? 'left' : 'right',
          margin: `0 ${left ? '1em' : '0'} 0 ${left ? '0' : '1em'}`,
        }"
        :src="src"
        :alt="alt"
      />
      <div class="preview" v-html="excerpt"></div>
      <router-link :to="path">Read more.</router-link>
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Lecturer",
  props: {
    path: {
      type: String,
      reqired: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    page() {
      return this.$site.pages.find(({ regularPath }) => regularPath === this.path);
    },
    src() {
      return get(["page", "frontmatter", "image", "src"], this) || "";
    },
    alt() {
      return get(["page", "frontmatter", "image", "alt"], this) || "";
    },
    description() {
      return get(["page", "frontmatter", "description"], this) || "";
    },
    name() {
      return get(["page", "frontmatter", "name"], this) || "";
    },
    excerpt() {
      return get(["page", "excerpt"], this) || "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.lecturer
  // background-color lighten($accentColor,95%)
  background-color transparent
  padding 1rem
  margin 1rem 0
  overflow auto
  // border 1px solid lighten($accentColor,80%)
  border 1px solid alpha($accentColor,25%)
  border-radius 5px
  // box-shadow 1px 1px 4px 1px lighten($accentColor,85%)
  box-shadow -1px 1px 4px 1px $borderColor
  & > div
    text-align justify

img
  width 40%

p
  text-align justify
  margin-block-start 0.5rem
  margin-block-end 0.5rem

@media (max-width: ($courseContentWidth + $courseSidebarWidth))
  p
    text-align unset
  img
    width 20%
</style>
