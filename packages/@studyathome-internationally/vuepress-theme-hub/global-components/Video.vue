<template>
  <div id="container">
    <iframe id="player" type="text/html" :src="url" frameborder="0" />
  </div>
</template>

<script>
import { append } from "../utils/url.js";
export default {
  name: "Video",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      src: "https://www.youtube.com/embed/",
      params: {
        autoplay: false,
        controle: false,
        rel: false,
        modestbranding: true,
        origin: ""
      }
    };
  },
  computed: {
    url() {
      const videoUrl = this.src + this.id;
      return append(videoUrl, this.params);
    }
  }
};
</script>

<style lang="stylus" scoped>
#container
  margin 2rem 0
  position relative
  width 100%
  height 0
  padding-top 56.25%; // 9 / 16 * 100

#player
  position absolute
  top 0
  left 0
  width 100%
  height 100%
</style>
