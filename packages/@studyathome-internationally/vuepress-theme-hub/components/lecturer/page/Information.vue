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
  components: { Position, Contacts, Experience },
};
</script>

<style lang="stylus">
.theme-default-content
  .title
    background-color $accentColor
    border-radius 5px
    color white
    padding 0.25rem
    padding-left 0.5rem
    font-size 1rem
    font-weight 500
    margin-bottom 0.5rem

  ul
    list-style-type none
    padding-left 0.25rem
    margin-block-start 0
    margin-block-end 0
</style>
