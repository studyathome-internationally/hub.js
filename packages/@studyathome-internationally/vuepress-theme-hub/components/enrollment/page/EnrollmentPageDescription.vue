<template>
  <div v-html="content"></div>
</template>

<script>
import { getPage } from "@theme/utils/page.js";
import { extractSlot } from "@theme/utils/container.js";
export default {
  name: "EnrollmentPageDescription",
  data() {
    return {};
  },
  computed: {
    content() {
      const general = getPage(this, "/general/enroll.html");
      return extractSlot("content", general.excerpt);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>