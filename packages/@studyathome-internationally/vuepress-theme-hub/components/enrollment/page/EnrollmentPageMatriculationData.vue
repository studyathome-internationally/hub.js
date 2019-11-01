<template>
  <AlertCollapse
    title="Matriculation Data"
    :initial="false"
    :variant="variant"
    idKey="enrollment-matriculation-data-collapse"
  >
    <slot>
      <slot name="start"></slot>
      <div v-html="content"></div>
      <slot name="end"></slot>
    </slot>
  </AlertCollapse>
</template>

<script>
import AlertCollapse from "@theme/components/general/boxes/AlertCollapse.vue";
import { getPage } from "@theme/utils/page.js";
import { extractSlot } from "@theme/utils/container.js";
export default {
  name: "EnrollmentPageMatriculationData",
  props: {
    variant: {
      type: String,
      default: "info"
    }
  },
  components: { AlertCollapse },
  computed: {
    content() {
      const general = getPage(this, "/general/enroll.html");
      return extractSlot("matriculation-data", general.excerpt);
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  border-top: 0.1rem solid #85640465 !important;
}
</style>