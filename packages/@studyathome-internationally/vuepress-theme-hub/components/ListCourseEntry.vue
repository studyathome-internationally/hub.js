<template>
  <b-card
    :img-src="frontmatter.image || 'https://picsum.photos/600/300/?image=25'"
    img-alt="Alternative Text"
  >
    <b-card-title>
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
</style>