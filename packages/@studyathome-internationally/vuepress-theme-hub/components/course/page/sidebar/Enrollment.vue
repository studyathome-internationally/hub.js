<template>
  <section class="enrollment">
    <h2 id="enrollment">
      <a href="#enrollment" class="header-anchor">#</a>
      Enrollment
    </h2>
    <p>
      Participation is free of charge. Student of partner universities can send applications to
      participate in courses.
    </p>
    <router-link class="action" :to="{ path: '/courses/enroll/', query: { course } }">
      <button>Enroll now!</button>
    </router-link>
  </section>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Enrollment",
  computed: {
    course() {
      return get(["$page", "title"], this) || "";
    }
  }
};
</script>

<style lang="stylus" scoped></style>
