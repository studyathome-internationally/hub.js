<template>
  <div>
    <h1>{{ $page.title }}</h1>
    <div class="overview">
      <Figure class="portrait" :src="src" :zoom="false" />
      <Information class="information" />
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Information from "@theme/components/lecturer/page/Information.vue";
import Figure from "@theme/components/general/Figure.vue";

export default {
  name: "Overview",
  components: { Figure, Information },
  computed: {
    src() {
      return get(["$frontmatter", "portrait"], this) || "";
    },
  },
};
</script>

<style lang="stylus">
.overview
  display flex
  flex-flow row nowrap
  border 1px solid $borderColor
  border none
  border-radius 5px
  box-shadow 1px 1px 4px 1px darken($borderColor,40%)
  .portrait
    margin auto 1.5rem auto 1.5rem
    width 60%
    img
      border-radius 5px
      box-shadow 1px 1px 4px 2px darken($borderColor,30%)
  .information
    overflow hidden
    width 100%
    background-color alpha($accentColor,20%)
    padding 2rem 1rem
    border-radius 0 5px 5px 0
    & > div
      margin-bottom 1rem
      &:last-child
        margin-bottom 0

@media (max-width: $MQMobile)
  .overview
    flex-flow column nowrap
    .portrait
      margin auto
      max-height 25rem
    .information
      width unset
      border-radius 0 0 5px 5px

@media (max-width: $MQMobileNarrow)
  .overview
    overflow hidden
    .portrait
      overflow hidden
      width 100%
      img
        object-fit cover
</style>
