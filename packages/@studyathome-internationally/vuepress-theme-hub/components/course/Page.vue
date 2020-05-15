<template>
  <main class="page">
    <Contents />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
  </main>
</template>

<script>
import Contents from "@theme/components/course/page/Contents.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav, Contents },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl'

$infobarWidth = 350px

.page
  margin-top $navbarHeight
  padding-bottom 2rem
  display block

.page-edit
  margin-top 2rem
</style>
