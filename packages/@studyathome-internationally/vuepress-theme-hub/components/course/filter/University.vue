<template>
  <form @submit.prevent>
    <fieldset @change="onChange" name="universities">
      <div class="label">
        <legend>
          <ShareFilterHosts :selection="selection">Host University</ShareFilterHosts>
        </legend>
      </div>
      <div ref="universities" class="options">
        <template v-for="(university, idx) of universityEntries">
          <input
            type="checkbox"
            name="university"
            :key="`input-${idx}`"
            :id="sanitize(university.title) + '-' + uuid"
            :value="university.path"
            :checked="university.checked"
            :disabled="!university.available"
          />
          <label :key="`label-${idx}`" :for="sanitize(university.title) + '-' + uuid">{{ university.title }}</label>
        </template>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { hash } from "@theme/utils/hash.js";

import ShareFilterHosts from "@theme/components/course/filter/ShareFilterHosts.vue";

export default {
  name: "University",
  components: { ShareFilterHosts },
  props: {
    universities: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      uuid: "",
      universityEntries: [],
      selection: [],
    };
  },
  computed: {
    ...mapState(["filter"]),
  },
  methods: {
    sanitize(text) {
      return text.toLowerCase().replace(/\s/g, "-");
    },
    updateSelection() {
      this.selection = Array.from(this.$refs.universities.children)
        .filter(({ checked, nodeName }) => "INPUT" === nodeName && checked)
        .map(({ value }) => value);
    },
    onChange() {
      this.updateSelection();
      this.$emit("update", this.selection);
    },
  },
  async created() {
    this.uuid = this._uid.toString();
    try {
      // FIXME: server build throws error because of undefined `window`.
      // testing if `window` exists seems to have no effect.
      this.universityEntries = await Promise.all(
        this.universities.map(async (university) => {
          const page = this.$site.pages.find(({ regularPath }) => university.path === regularPath);
          const hashValue = await hash(university.path, 7);
          return {
            title: page.title,
            hash: hashValue,
            checked:
              this.filter.hosts.length > 0 && university.available ? this.filter.hosts.includes(hashValue) : true,
            ...university,
          };
        })
      );
      this.selection = this.universityEntries.filter(({ checked }) => checked).map(({ path }) => path);
      this.$emit("update", this.selection);
    } catch (e) {}
  },
};
</script>

<style lang="stylus" scoped>
form
  // background-color red
  background-color $borderColor
  padding 0.5rem
  // font-size 0.7rem
  fieldset
    border unset
    padding unset
    display flex
    flex-flow row nowrap
    .label
      // background-color yellow
      display flex
      flex-flow row nowrap

      // vertical-align middle

      legend
        // background-color green
        // float left
        display flex
        flex-flow row nowrap
        // vertical-align middle
        align-items center

    .options
      display flex
      flex-flow row wrap
      padding-left 1rem

      input[type='checkbox']
        display none

      label
        cursor pointer
        padding 0.25rem
        margin 0.2rem 0.1rem
        border-radius 0.25rem
        // box-shadow 1px 1px 2px 1px darken($borderColor, 40%)
        color lighten($accentColor, 20%)
        font-size 0.75rem
        border 1px solid lighten($accentColor, 20%)

      // input[type='checkbox']:not(:checked) + label

      input[type='checkbox']:checked + label
        background-color lighten($accentColor, 5%)
        color $borderColor

      input[type='checkbox']:disabled + label
        background-color darken($borderColor,25%)
        border-color darken($borderColor,25%)
        color lighten($borderColor,20%)

@media (max-width: $MQMobile)
  form
    fieldset
      flex-flow column nowrap
      .label
        margin-bottom 0.5rem
      .options
        padding-left unset
</style>
