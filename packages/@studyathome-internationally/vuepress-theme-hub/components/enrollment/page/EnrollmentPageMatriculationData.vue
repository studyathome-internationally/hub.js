<template>
  <AlertCollapse
    title="Matriculation Data"
    :initial="false"
    variant="info"
    idKey="enrollment-matriculation-data-collapse"
  >
    <slot></slot>
  </AlertCollapse>
</template>

<script>
import AlertCollapse from "@theme/components/general/boxes/AlertCollapse.vue";
export default {
  name: "EnrollmentPageMatriculationData",
  components: { AlertCollapse }
};
</script>

<style lang="scss" scoped>
</style>