<template>
  <div class="text-preview">
    <div class="content" :class="`${preview ? 'preview' : 'no-preview'}`">
      <slot></slot>
    </div>
    <div class="control">
      <button @click="onClick">{{ label }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextPreview",
  data() {
    return {
      preview: true,
    };
  },
  computed: {
    label() {
      return this.preview ? "Show more" : "Show less";
    },
  },
  methods: {
    onClick() {
      this.preview = !this.preview;
    },
  },
};
</script>

<style lang="stylus" scoped>
.control
  padding 0 0 0.5rem 0.5rem
  button
    background darken($borderColor, 8%)
    box-shadow 1px 1px 3px 1px darken($borderColor, 16%)
    padding 0.2rem 0.4rem
    margin-top 0.5rem
    border unset
    font-size 1rem
    font-weight 600
    color $accentColor
    cursor pointer
    &:hover
      text-decoration underline
.content
  background darken($borderColor, 8%)
  padding 0.5rem 1rem
  &.preview
    max-height 14rem
    overflow hidden
    text-overflow ellipsis
  &.no-preview
    max-height unset
    overflow unset
    text-overflow unset
.indicator
  margin-block-start 0
  margin-block-end 0
  padding-left 10px
</style>
