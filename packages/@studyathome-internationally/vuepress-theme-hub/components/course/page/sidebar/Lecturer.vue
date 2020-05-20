<template>
  <div class="lecturer">
    <div class="title" :style="{
        textAlign: left ? 'left' : 'right',
      }">{{ name }}</div>
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
    <div class="preview">
      <div class="excerpt" v-html="excerpt"></div>
      <router-link :to="path">Read more.</router-link>
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
      reqired: true
    },
    left: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    page() {
      return this.$site.pages.find(
        ({ regularPath }) => regularPath === this.path
      );
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>
