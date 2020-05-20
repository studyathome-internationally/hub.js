<template>
  <div>
    <div class="position">
      <a :href="href" rel="noopener" target="_blank">
        {{ role }}
        <OutboundLink />
      </a>
    </div>
    <div>{{ department }}</div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Position",
  computed: {
    role() {
      return get(["$frontmatter", "position", "role"], this) || "";
    },
    department() {
      return get(["$frontmatter", "position", "department"], this) || "";
    },
    href() {
      return get(["$frontmatter", "position", "href"], this) || "";
    }
  }
};
</script>

<style lang="stylus" scoped></style>
