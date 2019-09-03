<template>
  <b-card :img-src="frontmatter.image" :img-alt="frontmatter.imageAlt">
    <b-card-title style="padding: 0; margin: 0;">
      <b-link :to="path">{{frontmatter.title}}</b-link>
    </b-card-title>
    <b-card-text>{{ frontmatter.lecturer }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    courseData: Object
  },
  data() {
    return {
      frontmatter: this.courseData.frontmatter,
      path: this.courseData.path
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
div.card-body {
  margin: 0;
  padding: 0;
}
</style>