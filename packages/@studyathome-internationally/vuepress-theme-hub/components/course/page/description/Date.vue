<template>
  <div>
    <font-awesome-icon class="icon" icon="calendar-alt"></font-awesome-icon>
    <time
      :datetime="start.year + '-' + start.month + '-' + start.day"
    >{{ start.day }}.{{ start.month }}.{{ start.year }}</time>
    -
    <time
      :datetime="end.year + '-' + end.month + '-' + end.day"
    >{{ end.day }}.{{ end.month }}.{{ end.year }}</time>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";
import { convertDate } from "@theme/utils/date.js";

export default {
  name: "Date",
  computed: {
    start() {
      return this.extract("start");
    },
    end() {
      return this.extract("end");
    }
  },
  methods: {
    extract(prop) {
      return convertDate(get(["$frontmatter", "schedule", prop], this));
    }
  }
};
</script>

<style lang="stylus" scoped></style>
