<template>
  <div class="content-wrapper">
    <!-- <ListCourseEntry v-for="entry of entries" :key="entry.path" :course-data="entry" /> -->
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
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