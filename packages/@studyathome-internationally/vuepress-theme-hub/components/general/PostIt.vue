<template>
  <div class="post-it">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PostIt",
};
</script>

<style lang="stylus" scoped>
.post-it
  background-color darken(yellow,20%)
</style>
