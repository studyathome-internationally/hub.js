<template>
  <iframe id="player" type="text/html" :src="videoUrl" frameborder="0" />
</template>

<script>
export default {
  name: "Youtube",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      src: "https://www.youtube.com/embed/",
      // https://developers.google.com/youtube/player_parameters
      params: {
        autoplay: false, // https://developers.google.com/youtube/player_parameters#autoplay
        // color: , // https://developers.google.com/youtube/player_parameters#color
        controls: false, // https://developers.google.com/youtube/player_parameters#controls
        rel: false, // https://developers.google.com/youtube/player_parameters#rel
        // Use a YouTube player that does not show a YouTube logo.
        modestbranding: true,
        // origin
        origin: ""
      }
    };
  },
  computed: {
    videoUrl() {
      const video = `${this.src}${this.id}`;
      return this.appendParams(video);
    }
  },
  methods: {
    appendParams(url) {
      let q = "?";
      for (const prop in this.params) {
        const value = this.params[prop];
        if (typeof value === "boolean") {
          q += `${prop}=${value ? "1" : "0"}`;
        } else {
          q += `${prop}=${value}`;
        }
      }
      return url + q;
    }
  },
  created() {
    // TODO: Wrap in <ClientOnly>
    if (typeof window !== "undefined") {
      this.params.origin = `${window.location.hostname}${this.$site.base}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
#player {
  width: 100%;
  height: 240px;
}
</style>