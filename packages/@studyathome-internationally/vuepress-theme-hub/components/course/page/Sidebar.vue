<template>
  <div>
    <Enrollment />
    <University />
    <Lecturers />
  </div>
</template>

<script>
import Enrollment from "@theme/components/course/page/sidebar/Enrollment.vue";
import University from "@theme/components/course/page/sidebar/University.vue";
import Lecturers from "@theme/components/course/page/sidebar/Lecturers.vue";

export default {
  name: "Sidebar",
  components: { Enrollment, University, Lecturers },
};
</script>

<style lang="stylus" scoped></style>
