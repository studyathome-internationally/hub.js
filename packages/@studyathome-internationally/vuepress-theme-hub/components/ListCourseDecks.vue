<template>
  <div>
    <div class="deck-wrapper" v-for="[idx, entryMap] of entriesMap.entries()" :key="idx">
      <ListCourseDeck :courses="entryMap" />
    </div>
  </div>
</template>

<script>
import ListCourseDeck from "@theme/components/ListCourseDeck.vue";

export default {
  props: {
    row: {
      type: Number,
      default: 3
    }
  },
  components: {
    ListCourseDeck
  },
  data() {
    return {};
  },
  computed: {
    entries: function() {
      return this.$site.pages.filter(({ path }) => {
        const r = new RegExp("^" + this.$route.path);
        return path !== this.$route.path && r.exec(path);
      });
    },
    entriesMap: function() {
      let array = [];
      while (this.entries.length) array.push(this.entries.splice(0, this.row));
      return array;
    }
  }
};
</script>

<style lang="stylus" scoped>
.deck-wrapper {
  padding: 15px 0;
}
</style>