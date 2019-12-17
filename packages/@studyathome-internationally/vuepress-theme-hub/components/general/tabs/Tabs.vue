<template>
  <nav>
    <Tab
      v-for="{title, slot, icon} in tabs"
      :key="slot"
      :id="slot"
      :icon="icon"
      :active="active === slot"
      v-on="$listeners"
      @tab-change="onTabChange"
    >{{title}}</Tab>
  </nav>
</template>

<script>
import Tab from "@theme/components/general/tabs/Tab.vue";
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    tab: {
      type: String,
      default: "default"
    }
  },
  components: { Tab },
  data() {
    return {
      active: null
    };
  },
  methods: {
    onTabChange(id) {
      this.active = id;
      this.$emit("update:tab", id);
    }
  },
  created() {
    this.active = this.tab;
  },
  updated() {
    this.active = this.tab;
  }
};
</script>

<style lang="stylus" scoped>
nav {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-evenly;
  // justify-content: space-between;
}
</style>