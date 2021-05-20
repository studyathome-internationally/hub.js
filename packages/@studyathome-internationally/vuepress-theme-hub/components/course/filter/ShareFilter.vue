<template>
  <div>
    <button class="action" @click="onShare" title="Copy Link">
      <slot />
      <font-awesome-icon icon="clone"></font-awesome-icon>
    </button>
    <transition name="fade">
      <div v-if="showClipboardInformation" :class="{ 'clipboard-msg': showClipboardInformation }">
        Link copied to the Clipboard!
      </div>
    </transition>
  </div>
</template>

<script>
import { hash } from "@theme/utils/hash.js";

export default {
  name: "ShareFilter",
  props: {
    selection: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showClipboardInformation: false,
    };
  },
  methods: {
    async onShare() {
      const hashValues = await Promise.all(this.selection.map(async (entry) => await hash(entry, 7)));
      const filter = "filter=" + window.encodeURIComponent(hashValues.join(","));
      const value = window.location.href + "?" + filter;
      await window.navigator.clipboard.writeText(value);

      // console.log("Copied to clipboard: ", value);
      this.showClipboardInformation = true;
      const thiz = this;
      setTimeout(() => {
        thiz.showClipboardInformation = false;
      }, 2000);
    },
  },
};
</script>

<style lang="stylus" scoped>
.clipboard-msg
  background-color $accentColor
  color white
  box-shadow 1px 1px 4px 1px darken($borderColor, 40%)
  position fixed
  min-width 14vw
  left 50%
  transform translate(-50%, -50%)
  padding 1rem
  font-size 1.2rem
  border-radius 0.4rem
  bottom 7%

.fade-enter-active
  transition bottom .25s

.fade-leave-active
  transition opacity .5s

.fade-enter
  bottom -7%

.fade-leave-to
  opacity 0

button
  border unset
  background unset
  padding unset
  cursor pointer
  font-size 1rem
  .fa-clone
    color lighten($accentColor,10%)
    font-size 0.75rem
    margin-left 0.25rem
    margin-bottom 0.25rem
</style>
