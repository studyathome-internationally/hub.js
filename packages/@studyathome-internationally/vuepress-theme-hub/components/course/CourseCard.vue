<template>
  <b-card
    id="card"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    tabindex="0"
    @keydown.enter="routeToCourse"
  >
    <div slot="header">
      <b-card-img-lazy class="card-image" :src="cardImage" :image-alt="frontmatter.imageAlt"></b-card-img-lazy>
    </div>
    <CourseData :data="frontmatter" :link="path" />
  </b-card>
</template>

<script>
import CourseData from "@theme/components/course/card/CourseCardData.vue";
export default {
  name: "CourseCard",
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
  computed: {
    cardImage() {
      return this.frontmatter.media.image
        ? this.frontmatter.media.image.startsWith("https://")
          ? this.frontmatter.media.image
          : this.$withBase(this.frontmatter.media.image)
        : this.$withBase("/assets/img/800x600.png");
    }
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

.card-image {
  height: 150px;
  object-fit: cover;
}
</style>