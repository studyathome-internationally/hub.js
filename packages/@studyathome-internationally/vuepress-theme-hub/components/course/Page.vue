<template>
  <main class="page course" :class="{ mobile: !show }">
    <Title />
    <div class="container">
      <Description />
      <div class="contents">
        <Content />
        <Sidebar />
      </div>
    </div>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
  </main>
</template>

<script>
import Title from "@theme/components/course/page/Title.vue";
import Description from "@theme/components/course/page/Description.vue";
import Sidebar from "@theme/components/course/page/Sidebar.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

import courseSidebar from "@theme/mixins/course-sidebar.js";

export default {
  components: { Title, Description, Sidebar, PageEdit, PageNav },
  mixins: [courseSidebar],
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl';

.page {
  margin-top: $navbarHeight;
  padding-bottom: 2rem;
  display: block;
}

.page-edit {
  margin-top: 2rem;
}
</style>
