<template>
  <div>
    <font-awesome-icon class="icon" icon="language"></font-awesome-icon>
    <span v-for="(language, i) of languages" :key="language">
      <template v-if="i + 1 !== languages.length">{{ language }},&nbsp;</template>
      <template v-else>{{ language }}</template>
    </span>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
export default {
  name: "Language",
  computed: {
    languages() {
      return get(["$frontmatter", "language"], this) || [];
    }
  }
};
</script>

<style lang="stylus" scoped></style>
