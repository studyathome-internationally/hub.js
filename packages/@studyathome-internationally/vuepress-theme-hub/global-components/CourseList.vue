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
      return this.$site.pages.filter(
        ({ regularPath }) => {
          const path = this.path || this.$route.path;
          return (
            Boolean(path) &&
            regularPath !== path &&
            regularPath.startsWith(`${path}`)
          );
        }
        // const path = this.path || this.$route.path;
        // const r = new RegExp("^" + basePath);
        // return path !== basePath && r.exec(path);
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-between;
  justify-content: center;
}

.container > * {
  width: 31%;
  margin: 1vh auto;
  box-shadow: #ccc 1px 2px 5px 0px;
  transition: 0.5s width ease;
  min-width: 200px;
}

// .container > *:last-child {
//   margin: 1vh auto;
// }

@media (max-width: 768px) {
  .container > * {
    width: 100%;
  }
}
</style>