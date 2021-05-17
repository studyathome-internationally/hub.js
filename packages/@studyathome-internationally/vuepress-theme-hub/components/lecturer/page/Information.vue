<template>
  <div>
    <Position />
    <Contacts />
    <Courses />
    <Experience />
  </div>
</template>

<script>
import Position from "@theme/components/lecturer/page/information/Position.vue";
import Contacts from "@theme/components/lecturer/page/information/Contacts.vue";
import Courses from "@theme/components/lecturer/page/information/Courses.vue";
import Experience from "@theme/components/lecturer/page/information/Experience.vue";

export default {
  name: "Information",
  components: { Position, Contacts, Experience, Courses },
};
</script>

<style lang="stylus"></style>
