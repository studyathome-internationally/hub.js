<template>
  <div class="information">
    <Content slot-key="information" />
    <div class="hard-facts">
      <ECTS />
      <Date />
      <Language />
      <Enroll />
    </div>
  </div>
</template>

<script>
import ECTS from "@theme/components/course/page/description/ECTS.vue";
import Date from "@theme/components/course/page/description/Date.vue";
import Language from "@theme/components/course/page/description/Language.vue";
import Enroll from "@theme/components/course/page/description/Enroll.vue";

export default {
  name: "Information",
  components: { ECTS, Date, Language, Enroll },
  computed: {
    description() {
      return this.$frontmatter.description;
    },
    course() {
      return this.$title.split("|")[0].trim();
    },
  },
};
</script>

<style lang="stylus" scoped></style>
