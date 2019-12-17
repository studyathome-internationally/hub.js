<template>
  <nav class="tabs">
    <IconTab
      v-for="t of tabs"
      :tab="t"
      :key="t.slot"
      @tab-change="onTabChange"
      :active="tab === t.slot"
    />
  </nav>
</template>

<script>
import IconTab from "@theme/components/general/tabs/IconTab.vue";
export default {
  name: "IconTabs",
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
  components: {
    IconTab
  },
  data() {
    return {};
  },
  methods: {
    onTabChange(slot) {
      this.$emit("update:tab", slot);
    }
  }
};
</script>

<style lang="stylus" scoped>
nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  // align-items: center;
  align-content: center;
  width: 100%;
  line-height: 2.8rem;
}
</style>