<template>
  <div>
    <ListCourseDecks :row="3" />
  </div>
</template>

<script>
import ListCourseDecks from "@theme/components/ListCourseDecks.vue";

export default {
  components: {
    ListCourseDecks
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>