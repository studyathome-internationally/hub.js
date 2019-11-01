<template>
  <AlertCollapse title="Privacy Information" :variant="variant">
    <template v-slot:default>
      <hr />
      <slot>
        <slot name="start"></slot>
        <div v-html="disclaimer.general"></div>
        <hr />
        <div v-html="disclaimer.university"></div>
        <slot name="end"></slot>
      </slot>
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
import { getPage, getCourseUniversityPage } from "@theme/utils/page.js";
import { extractSlot } from "@theme/utils/container.js";
export default {
  name: "EnrollmentPageDisclaimer",
  props: {
    variant: {
      type: String,
      default: "warning"
    }
  },
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
  computed: {
    enrollment() {
      const general = getPage(this, "/general/enroll.html");
      const university = getCourseUniversityPage(
        this,
        this.$page,
        "enroll.html"
      );
      return { general, university };
    },
    disclaimer() {
      return {
        general: extractSlot("disclaimer", this.enrollment.general.excerpt),
        university: extractSlot(
          "disclaimer",
          this.enrollment.university.excerpt
        )
      };
    }
  },
  created() {
    this.icon = this.display ? "chevron-down" : "chevron-up";
  }
};
</script>

<style lang="scss" scoped>
hr {
  border-top: 0.1rem solid #85640465 !important;
}
</style>