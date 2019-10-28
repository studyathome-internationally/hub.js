<template>
  <div>
    <b-alert show :variant="variant">
      <div
        class="toggle-collapse"
        :aria-label="ariaLabel"
        tabindex="0"
        v-b-toggle="idKey"
        @keydown.enter="display = !display"
      >
        <span class="title">{{ title }}</span>
        <slot name="icon">
          <font-awesome-icon
            size="lg"
            :icon="icon"
            class="icon"
            :class="{'rotate-down': !display, 'rotate-up': display}"
          />
        </slot>
      </div>
      <b-collapse :id="idKey" v-model="display">
        <slot></slot>
      </b-collapse>
      <slot name="footer"></slot>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "AlertCollapse",
  props: {
    icon: {
      type: String,
      default: "chevron-down"
    },
    idKey: {
      type: String,
      default: "alert-collapse"
    },
    title: {
      type: String,
      default: "Title"
    },
    variant: {
      type: String,
      default: "primary"
    },
    ariaLabel: {
      type: String,
      default: "Collapse"
    },
    initial: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      display: true
    };
  },
  created() {
    this.display = this.initial;
  }
};
</script>

<style lang="scss" scoped>
span.title {
  font-weight: bold;
}
div.toggle-collapse {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  cursor: pointer;
  & .rotate-up {
    transition: all 0.3s ease;
    transform: rotate(180deg);
  }
  & .rotate-down {
    transition: all 0.3s ease;
    transform: rotate(360deg);
  }
}
</style>