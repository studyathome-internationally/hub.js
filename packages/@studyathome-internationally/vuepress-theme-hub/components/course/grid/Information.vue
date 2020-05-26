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
          size="xs"
          class="winter"
          v-if="semester === 'Winter'"
          icon="snowflake"
        ></font-awesome-icon>
        <font-awesome-icon size="xs" class="summer" v-else icon="sun"></font-awesome-icon>
        <span>{{ semester }}</span>
        <font-awesome-icon
          size="xs"
          class="winter"
          v-if="semester === 'Winter'"
          icon="snowflake"
        ></font-awesome-icon>
        <font-awesome-icon size="xs" class="summer" v-else icon="sun"></font-awesome-icon>
      </span>
    </div>
    <div>
      <label :for="path + 'start'">Start</label>
      <time
        :id="path + 'start'"
        :datetime="start.year + '-' + start.month + '-' + start.day"
        >{{ start.day }}.{{ start.month }}.{{ start.year }}</time
      >
    </div>
    <div>
      <label :for="path + 'end'">End</label>
      <time :id="path + 'end'" :datetime="end.year + '-' + end.month + '-' + end.day"
        >{{ end.day }}.{{ end.month }}.{{ end.year }}</time
      >
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
import { convertDate } from "@theme/utils/date.js";
import course from "@theme/mixins/course.js";

export default {
  name: "Information",
  mixins: [course],
  computed: {
    ects() {
      return get(["page", "frontmatter", "ects"], this) || "";
    },
    semester() {
      return get(["page", "frontmatter", "semester"], this) || "";
    },
    start() {
      return convertDate(get(["page", "frontmatter", "schedule", "start"], this));
    },
    end() {
      return convertDate(get(["page", "frontmatter", "schedule", "end"], this));
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

.winter, .summer
  padding-bottom 0.1rem

.winter
  &, & + span
    color $accentColor
    font-weight 500

.summer
  &, & + span
    color darken(red, 20%)
    font-weight 500
</style>
