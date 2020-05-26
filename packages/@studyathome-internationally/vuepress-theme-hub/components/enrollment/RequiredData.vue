<template>
  <div class="required">
    <details class="hub">
      <summary>
        <span>
          {{ title }}
        </span>
        <font-awesome-icon class="marker" icon="angle-double-down"></font-awesome-icon>
      </summary>
      <slot></slot>
    </details>
  </div>
</template>

<script>
export default {
  name: "RequiredData",
  props: {
    title: {
      type: String,
      default: "Required",
    },
  },
};
</script>

<style lang="stylus" scoped>
.required
  margin-block-start 0.5rem
  margin-block-end 1rem
</style>
