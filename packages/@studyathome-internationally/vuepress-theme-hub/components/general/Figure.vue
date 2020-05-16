<template>
  <div class="container" :class="{ 'no-zoom': !zoom }">
    <img :src="source" :alt="alt" :title="title || alt" />
  </div>
</template>

<script>
export default {
  name: "Figure",
  props: {
    src: {
      type: String,
      required: true,
    },
    zoom: {
      type: Boolean,
      default: true,
    },
    alt: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    source() {
      return this.src.startsWith("/") ? this.$withBase(this.src) : this.src;
    },
  },
};
</script>

<style lang="stylus" scoped>
.container, img
  width 100%
  height 100%
img
  object-fit cover

@media (max-width: $MQMobileNarrow)
  .container, img
    box-shadow unset
    max-width unset
    max-height unset
</style>
