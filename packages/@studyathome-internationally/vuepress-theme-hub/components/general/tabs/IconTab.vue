<template>
  <a :href="id" class="tab" @click="onClick" :class="{active}">
    <font-awesome-icon class="tab-icon" v-if="tab.icon" :icon="tab.icon" size="lg"></font-awesome-icon>
    <span>{{tab.title}}</span>
  </a>
</template>

<script>
export default {
  name: "IconTab",
  props: {
    tab: {
      type: Object,
      required: true
      // default: () => {
      //   return {
      //     title: "Title",
      //     slot: "default",
      //     path: "page.html",
      //     icon: "circle"
      //   };
      // }
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit("tab-change", this.tab.slot);
    }
  },
  computed: {
    id() {
      return `#${this.tab.slot}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  // outline: 1px solid black;
}

.tab {
  width: 0;
  min-width: 15ex;
  flex: 1 1 0px;
  text-align: center;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-flow: column nowrap;
  // border-radius: 0px 10px 0px 0px;
  // justify-content: space-evenly;
  // justify-content: space-between;
  align-content: center;
  padding: 1px 10px;

  &.active {
    transition: background-color 1s ease;
    transition: color 1s ease;
    // transition: border-left-color 1s ease;
    // transition: border-bottom-color 1s ease;
    // transition: color 1s ease;
    background-color: $accentColor;
    color: white;
    // border-top: 1px solid white;
    border-left: 1px solid $accentColor;
    border-bottom: 1px solid $accentColor;
  }

  & > * {
    width: 100%;
  }

  & .tab-icon {
    // padding: 3px 0;
    margin: 10px 0 0 0;
  }
}

@media screen and (min-width: 800px) {
  .tab {
    width: 30%;
  }
}
</style>