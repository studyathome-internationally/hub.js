<template>
  <router-link class="action" :to="{ path: '/courses/enroll/', query: { course } }">
    <button>
      Enroll now!
    </button>
  </router-link>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Enroll",
  computed: {
    course() {
      return get(["$page", "title"], this) || "";
    },
  },
};
</script>

<style lang="stylus" scoped></style>
