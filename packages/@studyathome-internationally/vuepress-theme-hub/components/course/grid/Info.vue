<template>
  <div class="info">
    <div>
      <label :for="path + 'ects'">ECTS</label>
      <span :id="path + 'ects'">{{ ects }}</span>
    </div>
    <div>
      <label :for="path + 'semester'">Semester</label>
      <span :id="path + 'semester'">
        <font-awesome-icon
          class="winter"
          v-if="semester === 'Winter'"
          icon="snowflake"
        ></font-awesome-icon>
        <font-awesome-icon class="summer" v-else icon="sun"></font-awesome-icon>
        <span>
          {{ semester }}
        </span>
      </span>
    </div>
    <div>
      <label :for="path + 'start'">Start</label>
      <span :id="path + 'start'">{{ start }}</span>
    </div>
  </div>
</template>

<script>
import course from "@theme/mixins/course.js";

export default {
  name: "Info",
  mixins: [course],
  computed: {
    ects() {
      return this.page.frontmatter.ects;
    },
    semester() {
      return this.page.frontmatter.semester;
    },
    start() {
      return this.page.frontmatter.schedule.start;
    },
  },
};
</script>

<style lang="stylus" scoped>
.info
  display flex
  flex-flow column nowrap
  & > div
    display flex
    flex-flow row nowrap
    justify-content space-between
    & > span
      font-weight normal

.winter
  &,  & + span
    color $accentColor
    font-weight 600
.summer
  &,  & + span
    color darken(red,20%)
    font-weight 600
</style>
