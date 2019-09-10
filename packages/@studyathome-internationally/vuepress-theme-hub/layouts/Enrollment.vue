<template>
  <BasicLayout>
    <EnrollPage slot="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import EnrollPage from "@theme/components/enroll/EnrollPage.vue";

export default {
  components: { BasicLayout, EnrollPage },

  data() {
    return {};
  }
};
</script>