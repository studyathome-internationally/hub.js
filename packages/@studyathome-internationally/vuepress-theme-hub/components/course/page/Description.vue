<template>
  <div class="course-description">
    <Media :content="media" :alt="alt" :zoom="false" />
    <Information />
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Media from "@theme/components/general/Media.vue";
import Information from "@theme/components/course/page/description/Information.vue";

export default {
  name: "Description",
  components: { Media, Information },
  computed: {
    media() {
      return (
        get(["$frontmatter", "media", "description", "src"], this) ||
        get(["$frontmatter", "media", "main", "src"], this) ||
        ""
      );
    },
    alt() {
      return (
        get(["$frontmatter", "media", "description", "alt"], this) ||
        get(["$frontmatter", "media", "main", "alt"], this) ||
        ""
      );
    },
  },
};
</script>

<style lang="stylus"></style>
