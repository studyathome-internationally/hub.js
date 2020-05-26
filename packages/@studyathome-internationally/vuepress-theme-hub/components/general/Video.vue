<template>
  <div class="container">
    <div class="player" :id="id"></div>
  </div>
</template>

<script>
import ytPlayer from "youtube-player";

export default {
  name: "Video",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      player: null,
      ready: false,
    };
  },
  computed: {
    id() {
      return `youtube-player-${this.code}`;
    },
  },
  mounted() {
    if (!this.player) {
      this.player = ytPlayer(this.id, {
        wmode: "transparent",
        host: "https://www.youtube-nocookie.com",
        videoId: this.code,
        playerVars: {
          wmode: "transparent",
          showinfo: 0,
          autohide: 1,
          color: "white",
          origin: window ? window.location.origin : this.$themeConfig.host,
        },
      });
      this.player.on("ready", (event) => {
        this.ready = true;
      });
    }
  },
};
</script>

<style lang="stylus" scoped>
.container
  position relative
  width 100%
  height 0
  padding-bottom 56.27198%
</style>
