<template>
  <!-- <router-link :to="path"> -->
  <b-card id="card" @mousedown="onMouseDown" @mouseup="onMouseUp" tabindex="0">
    <!-- <b-card id="card" tabindex="0"> -->
    <div slot="header">
      <!-- <router-link :to="path"> -->
      <b-card-img-lazy
        :src="frontmatter.image || 'https://via.placeholder.com/800x600'"
        :image-alt="frontmatter.imageAlt"
      ></b-card-img-lazy>
      <!-- </router-link> -->
    </div>
    <CourseData :title="frontmatter.title" :lecturer="frontmatter.lecturer" :link="path" />
  </b-card>
  <!-- </router-link> -->
</template>

<script>
import CourseData from "@theme/components/course/CourseData.vue";
export default {
  components: {
    CourseData
  },
  props: {
    data: Object
  },
  data() {
    return {
      frontmatter: this.data.frontmatter,
      path: this.data.path
    };
  },
  methods: {
    routeToCourse() {
      this.$router.push({ path: this.path });
    },
    onMouseDown(e) {
      this.mouseStart = {
        x: e.clientX,
        y: e.clientY
      };
    },
    onMouseUp(e) {
      const dx = e.clientX - this.mouseStart.x;
      const dy = e.clientY - this.mouseStart.y;
      if (Math.abs(dx) < 5 && Math.abs(dy) < 10) {
        this.routeToCourse();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#card {
  cursor: pointer;
}

// #card:hover,
// #card:focus {
//   outline: 2px #0e0 solid;
// }

a,
a:hover {
  text-decoration-style: none;
}

div.card-body {
  margin: 10px;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
}

div.card-header {
  padding: 0;
  border: none;
}
</style>