<template>
  <div class="container">
    <ListItem v-for="course of courses" :key="course.path" :course-data="course" />
  </div>
</template>

<script>
import ListItem from "@theme/components/course/ListItem.vue";
export default {
  components: {
    ListItem
  },
  props: {
    path: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    courses: function() {
      return this.$site.pages.filter(({ path }) => {
        const basePath = this.path || this.$route.path;
        const r = new RegExp("^" + basePath);
        return path !== basePath && r.exec(path);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}

.container > * {
  width: 30%;
  margin: 1vw;
}
</style>