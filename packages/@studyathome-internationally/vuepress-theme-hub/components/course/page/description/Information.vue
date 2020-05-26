<template>
  <div class="information">
    <Content slot-key="information" />
    <div class="hard-facts">
      <ECTS />
      <Date />
      <Language />
      <Enroll v-if="active" />
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import ECTS from "@theme/components/course/page/description/ECTS.vue";
import Date from "@theme/components/course/page/description/Date.vue";
import Language from "@theme/components/course/page/description/Language.vue";
import Enroll from "@theme/components/course/page/description/Enroll.vue";

export default {
  name: "Information",
  components: { ECTS, Date, Language, Enroll },
  computed: {
    active() {
      return get(["$frontmatter", "enrollment"], this);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
