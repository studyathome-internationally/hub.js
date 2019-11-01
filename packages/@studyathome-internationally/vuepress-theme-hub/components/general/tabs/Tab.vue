<template>
  <div class="nav-item tab">
    <a
      :href="`#${id}`"
      @click="change(id)"
      :class="{'router-link-active': active}"
      class="nav-link"
    >
      <font-awesome-icon v-if="icon" style="margin-right: 5px;" :icon="icon"></font-awesome-icon>
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    change(id) {
      this.$emit("tab-change", id);
    }
  }
};
</script>

<style lang="stylus" scoped>
div.tab {
  flex: 1;
  // margin: 0 5px;
  text-align: center;

  // padding: 0 15px;
  & > a {
    flex: 1;
    line-height: 2.8rem;
    // justify-self: second baseline;
    color: $accentColor;
    border-bottom: 2px solid rgba($accentColor, 0.1);
    // width: 100%;
    margin: 0;
    padding: 0.5rem 4px;
    background-color: white;

    &.nav-link:hover {
      background: radial-gradient(circle at 100%, rgba($accentColor, 0.1), white 50%) !important;
      // background: radial-gradient(rgba($accentColor, 0.1), );
      // background: radial-gradient(circle at 50%, rgba($accentColor, 1), rgba($accentColor, 1) 0%, white 0%, rgba($accentColor, 1) 500%);
    }

    &.nav-link.router-link-active {
      background: radial-gradient(circle at 80%, rgba($accentColor, 0.1), white 50%) !important;
      // background: radial-gradient(circle at 100%, rgba($accentColor, 0.1), white 50%) !important;
      // background: radial-gradient(rgba($accentColor, 0.1), );
      // background: radial-gradient(circle at 50%, rgba($accentColor, 1), rgba($accentColor, 1) 0%, white 0%, rgba($accentColor, 1) 500%);
    }

    &.nav-link:not(.router-link-active) {
      // background: radial-gradient(circle at 0%, rgba($accentColor, 0.1), white 50%) !important;
    }
  }
}
</style>