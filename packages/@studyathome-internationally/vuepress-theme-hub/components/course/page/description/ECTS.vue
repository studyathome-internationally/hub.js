<template>
  <div>
    <font-awesome-icon class="icon" icon="certificate"></font-awesome-icon>
    <span>{{ ects }}</span>
    <abbr title="European Credit Transfer System">ECTS</abbr>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "ECTS",
  computed: {
    ects() {
      return get(["$frontmatter", "ects"], this) || 0;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
