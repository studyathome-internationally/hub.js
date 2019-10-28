<template>
  <b-form-group :label="label" label-for="course-select">
    <b-form-select
      id="course-select"
      v-model="selection"
      :options="choices"
      @change="onChange"
      required
    ></b-form-select>
  </b-form-group>
</template>

<script>
export default {
  name: "EnrollmentPageCourseSelection",
  props: {
    label: {
      type: String,
      default: "Select Course:"
    },
    choices: {
      type: Array,
      required: true,
      default: () => []
    },
    choice: {
      default: ""
    }
  },
  data() {
    return {
      selection: ""
    };
  },
  methods: {
    onChange(selection) {
      this.$emit("update:choice", selection);
    }
  },
  created() {
    this.selection = this.choice;
  }
};
</script>

<style lang="scss" scoped>
</style>