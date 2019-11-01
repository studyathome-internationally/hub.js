<template>
  <div>
    <!-- <img class="course-image" :src="$page.frontmatter.media.image" alt="Course Image" /> -->
    <!-- <div class="title" :style="{'background-image': `url(${$page.frontmatter.media.image})`}"> -->
    <div class="title">
      <h1>{{$page.title}}</h1>
      <div>
        <ul class="details">
          <li>{{title}}</li>
          <li>{{$page.frontmatter.university.faculty}}</li>
          <li>
            Lectures
            <ul class="details">
              <li
                v-for="lecturer of $page.frontmatter.lecturers"
                :key="lecturer.name"
              >{{lecturer.name}}</li>
            </ul>
          </li>
          <li>License: {{$page.frontmatter.license}}</li>
          <li>{{$page.frontmatter.link}}</li>
          <li>ECTS: {{$page.frontmatter.ects}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePageDetails",
  props: {
    pages: {
      type: Object,
      default: () => {
        return { universityPage: { title: "University Name" } };
      }
    }
  },
  computed: {
    university() {
      return this.pages.universityPage;
    },
    title() {
      const exists =
        this.university && typeof this.university.title !== "undefined";
      return exists ? this.university.title : "Default Title";
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  background-color: $accentColor;
  color: white;
  padding: 18px 30px;
  margin: 0;
}

.details {
  margin: 0 0;
  list-style-type: none;
}

.course-image {
  object-fit: cover;
  width: 100%;
  height: 14rem;
}
</style>