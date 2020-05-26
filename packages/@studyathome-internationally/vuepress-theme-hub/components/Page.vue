<template>
  <main class="page" :style="{ paddingBottom: cookie.consent ? '2rem' : '90px' }">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import { mapState } from "vuex";

import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  computed: mapState(["cookie"]),
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  // padding-bottom 2rem
  display block
</style>
