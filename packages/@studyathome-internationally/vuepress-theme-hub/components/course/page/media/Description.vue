<template>
  <div class="description">
    <Content slot-key="description" />
    <div class="info">
      <ECTS />
      <Date />
      <Language />
      <div>
        <font-awesome-icon style="width: 2rem;" icon="paper-plane"></font-awesome-icon>
        <router-link :to="{ path: '/courses/enroll/', query: { course } }">
          Enroll to the course!</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import ECTS from "@theme/components/course/page/media/ECTS.vue";
import Date from "@theme/components/course/page/media/Date.vue";
import Language from "@theme/components/course/page/media/Language.vue";

export default {
  name: "Description",
  components: { ECTS, Date, Language },
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

<style lang="stylus" scoped>
.description
  .info
    line-height 2
</style>
