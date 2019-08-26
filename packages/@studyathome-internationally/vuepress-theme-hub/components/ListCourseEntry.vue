<template>
  <b-card
    :title="frontmatter.title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Alternative Text"
  >
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
      frontmatter: this.courseData.frontmatter
    };
  }
};
</script>

<style lang="scss" scoped>
</style>