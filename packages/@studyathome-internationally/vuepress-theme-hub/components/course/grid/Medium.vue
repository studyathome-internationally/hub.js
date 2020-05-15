<template>
  <Media class="medium" :content="media" :zoom="false" />
</template>

<script>
import { get } from "@theme/utils/object.js";
import course from "@theme/mixins/course.js";

import Media from "@theme/components/general/Media.vue";

export default {
  name: "Medium",
  components: { Media },
  mixins: [course],
  computed: {
    media() {
      return (
        get(["page", "frontmatter", "media", "main", "src"], this) ||
        get(["page", "frontmatter", "media", "description", "src"], this) ||
        ""
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.medium
  height 200px
</style>

<style lang="stylus">
.courses-overview
  .medium
    img
      border-radius 4px 4px 0 0
</style>
