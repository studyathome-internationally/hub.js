<template>
  <div v-if="courses.length > 0">
    <div class="title">Courses</div>
    <ul>
      <li v-for="course of courses" :key="course.title">
        <router-link :to="course.path">
          {{ course.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
export default {
  name: "Courses",
  computed: {
    courses() {
      const lecturer = this.$page.path;
      return this.$site.pages
        .filter((page) => {
          const lecturers = get(["frontmatter", "lecturers"], page) || [];
          return lecturers.includes(lecturer);
        })
        .map(({ path, title }) => {
          return {
            title,
            path,
          };
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
