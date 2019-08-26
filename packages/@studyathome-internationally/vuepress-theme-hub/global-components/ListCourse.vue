<template>
  <div class="content-wrapper">
    <ListCourseEntry v-for="entry of entries" :key="entry.path" :course-data="entry" />
  </div>
</template>

<script>
import ListCourseEntry from "@theme/components/ListCourseEntry.vue";

export default {
  components: {
    ListCourseEntry
  },
  data() {
    return {
      paths: "test"
    };
  },
  computed: {
    entries: function() {
      return this.$site.pages.filter(({ path }) => {
        const r = new RegExp("^" + this.$route.path);
        return path !== this.$route.path && r.exec(path);
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>