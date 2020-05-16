<template>
  <main class="page lecturer">
    <Contents />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
  </main>
</template>

<script>
import Contents from "@theme/components/lecturer/page/Contents.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav, Contents },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl'
.page
  margin-top $navbarHeight
  padding-bottom 2rem
  display block

.page-edit
  margin-top 2rem
</style>
