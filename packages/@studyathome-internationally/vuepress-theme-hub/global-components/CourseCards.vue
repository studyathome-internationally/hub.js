<template>
  <div class="container">
    <CourseCard
      v-for="course of courses.filter(({frontmatter}) => frontmatter.state === true)"
      :key="course.path"
      :data="course"
    />
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
    index: function() {
      const path = this.path || this.$route.path;
      const indexPage = this.$site.pages.find(
        ({ regularPath }) => regularPath === path
      );
      return indexPage.frontmatter.indexed;
    },
    courses: function() {
      return this.$site.pages.filter(({ regularPath }) =>
        this.index.includes(regularPath)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container > * {
  width: 31%;
  margin: 0.4rem;
  box-shadow: #ccc 1px 2px 5px 0px;
  transition: 0.5s width ease;
  min-width: 200px;
}

@media (max-width: 768px) {
  .container > * {
    width: 100%;
    margin: 0.4rem auto;
  }
}
</style>