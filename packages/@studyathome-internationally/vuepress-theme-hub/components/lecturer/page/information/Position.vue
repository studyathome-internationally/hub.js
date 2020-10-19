<template>
  <div v-if="show">
    <div class="position">
      <a v-if="href" :href="href" rel="noopener" target="_blank">
        {{ role }}
        <OutboundLink />
      </a>
      <span v-else>{{ role }}</span>
    </div>
    <div>{{ department }}</div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Position",
  computed: {
    show() {
      return get(["$frontmatter", "position"], this) ? true : false;
    },
    role() {
      return get(["$frontmatter", "position", "role"], this) || "";
    },
    department() {
      return get(["$frontmatter", "position", "department"], this) || "";
    },
    href() {
      return get(["$frontmatter", "position", "href"], this) || "";
    },
  },
};
</script>

<style lang="stylus" scoped></style>
