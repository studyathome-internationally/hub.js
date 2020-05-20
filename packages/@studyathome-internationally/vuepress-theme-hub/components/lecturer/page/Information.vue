<template>
  <div>
    <Position />
    <Contacts />
    <Experience />
  </div>
</template>

<script>
import Position from "@theme/components/lecturer/page/information/Position.vue";
import Contacts from "@theme/components/lecturer/page/information/Contacts.vue";
import Experience from "@theme/components/lecturer/page/information/Experience.vue";

export default {
  name: "Information",
  components: { Position, Contacts, Experience }
};
</script>

<style lang="stylus"></style>
