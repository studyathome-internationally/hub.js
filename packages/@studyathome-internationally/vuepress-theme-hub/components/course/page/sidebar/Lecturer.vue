<template>
  <div class="lecturer-sidebar">
    <div
      class="title"
      :style="{
        textAlign: left ? 'left' : 'right',
      }"
    >
      {{ name }}
    </div>
    <Figure
      class="portrait"
      :src="src"
      :alt="alt"
      :zoom="false"
      :title="alt"
      :style="{
        float: left ? 'left' : 'right',
        margin: `0 ${left ? '1em' : '0'} 0 ${left ? '0' : '1em'}`,
      }"
    />
    <div class="lecturer-preview">
      <div class="excerpt" v-html="excerpt"></div>
      <router-link style="display: inline;" :to="path">Read more.</router-link>
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Figure from "@theme/components/general/Figure.vue";

export default {
  name: "Lecturer",
  components: { Figure },
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
      return get(["page", "frontmatter", "portrait"], this) || "";
    },
    alt() {
      return `Portrait of ${this.name}`;
    },
    description() {
      return get(["page", "frontmatter", "description"], this) || "";
    },
    name() {
      return get(["page", "title"], this) || "";
    },
    excerpt() {
      return get(["page", "excerpt"], this) || "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.lecturer-sidebar
  background-color transparent
  padding 1rem 0
  // margin 1rem 0
  overflow auto
  // border 1px solid alpha($accentColor,25%)
  // border-radius 5px
  // box-shadow -1px 1px 4px 1px $borderColor
  .title
    font-weight 600
    margin-bottom 0.5rem
  .portrait
    padding-top 1rem
    width 40%
</style>

<style lang="stylus">
.portrait
  img
    box-shadow 1px 1px 4px 1px $borderColor

.lecturer-preview
  .excerpt
    text-align justify
    display inline
  h1
    display none
  p
    margin-block-start 0.5rem
    margin-block-end 0.5rem

// @media (max-width: ($courseContentWidth + $courseSidebarWidth))
.no-side
  .lecturer-sidebar
    .lecturer-preview
      .excerpt
        text-align unset
    .portrait
      width 30%
      padding-top 0
      img
        width 100%

@media (max-width: $MQMobileNarrow)
  .no-side .lecturer-sidebar .portrait
    width 50%
    padding-top 1rem
</style>
