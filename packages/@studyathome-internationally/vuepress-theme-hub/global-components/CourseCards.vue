<template>
  <div class="container">
    <CourseCard v-for="course of courses" :key="course.path" :data="course" />
  </div>
</template>

<script>
import CourseCard from "@theme/components/course/CourseCard.vue";
export default {
  components: {
    CourseCard
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
      return this.$site.pages.filter(({ regularPath }) => {
        const path = this.path || this.$route.path;
        return (
          Boolean(path) &&
          regularPath !== path &&
          regularPath.startsWith(`${path}`) &&
          (regularPath.endsWith("index.html") || regularPath.endsWith("/"))
        );
      });
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