<template>
  <section class="enrollment">
    <h2 id="enrollment">
      <a href="#enrollment" class="header-anchor">#</a>
      Enrollment
    </h2>
    <p>
      Participation is free of charge. Student of partner universities can send
      applications to participate in courses.
    </p>
    <router-link v-if="active" class="action" :to="{ path: '/courses/enroll/', query: { course } }">
      <button>Enroll now!</button>
    </router-link>
    <p id="not-available" v-else>Enrolling to this course is not possible at this time.</p>
  </section>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Enrollment",
  computed: {
    course() {
      return get(["$page", "title"], this) || "";
    },
    active() {
      return get(["$frontmatter", "enrollment"], this);
    }
  }
};
</script>

<style lang="stylus" scoped>
#not-available {
  padding: 1rem;
  text-align: left;
  background-color: $borderColor;
}
</style>
