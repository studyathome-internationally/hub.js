<template>
  <div class="media" :class="{ figure: !isYoutube(content) }">
    <Figure v-if="content && !isYoutube(content)" :src="content" :zoom="zoom" :alt="alt" />
    <Video v-else-if="isYoutube(content)" :code="isYoutube(content)" />
    <div v-else class="media-default"></div>
  </div>
</template>

<script>
import Figure from "@theme/components/general/Figure.vue";
import Video from "@theme/components/general/Video.vue";

import youtube from "@theme/mixins/youtube.js";

export default {
  name: "Media",
  components: { Figure, Video },
  mixins: [youtube],
  props: {
    content: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    zoom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.media
  margin auto
</style>
