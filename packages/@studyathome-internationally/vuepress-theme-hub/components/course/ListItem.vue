<template>
  <b-card>
    <b-card-img-lazy
      slot="header"
      class="mb-0"
      :src="frontmatter.image"
      :image-alt="frontmatter.imageAlt"
    ></b-card-img-lazy>

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
  margin: 10px;
  padding: 0;
}

div.card-header {
  padding: 0;
  border: none;
}
</style>