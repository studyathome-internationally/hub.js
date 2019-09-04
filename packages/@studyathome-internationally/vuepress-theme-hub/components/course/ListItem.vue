<template>
  <b-card>
    <b-link :to="path" slot="header">
      <b-card-img-lazy class="mb-0" :src="frontmatter.image" :image-alt="frontmatter.imageAlt"></b-card-img-lazy>
    </b-link>
    <CourseData :title="frontmatter.title" :lecturer="frontmatter.lecturer" :link="path" />
  </b-card>
</template>

<script>
import CourseData from "@theme/components/course/CourseData.vue";
export default {
  components: {
    CourseData
  },
  props: {
    courseData: Object
  },
  data() {
    return {
      frontmatter: this.courseData.frontmatter,
      path: this.courseData.path
    };
  },
  methods: {
    routeToCourse() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration-style: none;
}
div.card-body {
  margin: 10px;
  padding: 0;
}

div.card-header {
  padding: 0;
  border: none;
}
</style>