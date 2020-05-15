<template>
  <li class="grid-item">
    <router-link class="grid-item-link" :to="path">
      <Medium :path="path" />
      <div class="content">
        <Title :path="path" />
        <Lecturers :path="path" />
        <Tags :path="path" />
        <Info :path="path" />
      </div>
    </router-link>
  </li>
</template>

<script>
import Medium from "@theme/components/course/grid/Medium.vue";
import Title from "@theme/components/course/grid/Title.vue";
import Lecturers from "@theme/components/course/grid/Lecturers.vue";
import Tags from "@theme/components/course/grid/Tags.vue";
import Info from "@theme/components/course/grid/Info.vue";

import course from "@theme/mixins/course.js";

export default {
  name: "Course",
  components: { Medium, Title, Lecturers, Tags, Info },
  mixins: [course],
};
</script>

<style lang="stylus" scoped>
.grid-item
  border 1px solid $borderColor
  border-radius 4px
  width calc(100% / 3 - 1rem)
  // margin 1rem auto
  margin 1rem 0.4rem
  box-shadow 1px 1px 3px 1px darken($borderColor,20%)
  .grid-item-link:hover
    text-decoration none
  .content
    padding 0.25rem .5rem

@media (max-width: $MQNarrow)
  .grid-item
    width calc(100% / 2 - 1rem)

@media (max-width: $MQMobile)
  .grid-item
      width 100%
</style>
