<template>
  <AlertCollapse title="Privacy Information" variant="warning">
    <template v-slot:default>
      <hr />
      <slot></slot>
    </template>
    <template v-slot:footer>
      <hr />
      <input @change="onChange" id="disclaimer-confirmation" type="checkbox" />
      <label for="disclaimer-confirmation">I confirm reading this information.</label>
    </template>
  </AlertCollapse>
</template>

<script>
import AlertCollapse from "@theme/components/general/boxes/AlertCollapse.vue";
export default {
  name: "EnrollmentPageDisclaimer",
  components: {
    AlertCollapse
  },
  data() {
    return {
      status: false,
      display: true,
      icon: ""
    };
  },
  methods: {
    onChange(event) {
      this.$emit("confirmation-change", event.target.checked);
    }
  },
  created() {
    this.icon = this.display ? "chevron-down" : "chevron-up";
  }
};
</script>

<style lang="scss" scoped>
</style>