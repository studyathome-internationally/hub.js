<template>
  <div>
    <table>
      <tr>
        <td>Title</td>
        <td>{{frontmatter.title}}</td>
      </tr>
      <tr>
        <td>University</td>
        <td>{{frontmatter.university}}</td>
      </tr>
    </table>
  </div>
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