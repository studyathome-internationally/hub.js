<template>
  <section>
    <h2 id="lecturers">
      <a href="#lecturers" class="header-anchor">#</a>
      Lecturers
    </h2>
    <Lecturer
      v-for="(lecturer, i) of lecturers"
      :key="lecturer"
      :path="lecturer"
      :left="Boolean((i + 1) % 2)"
    />
  </section>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Lecturer from "@theme/components/course/page/sidebar/Lecturer.vue";

export default {
  name: "Lecturers",
  components: { Lecturer },
  computed: {
    lecturers() {
      return get(["$frontmatter", "lecturers"], this) || [];
    },
  },
};
</script>

<style lang="stylus" scoped></style>
