<template>
  <div>
    <div class="title">Contact</div>
    <ul>
      <Contact v-for="(contact, key) in contacts" :key="key" :contact="contacts[key]" />
    </ul>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Contact from "@theme/components/lecturer/page/information/Contact.vue";
export default {
  name: "Contacts",
  components: { Contact },
  computed: {
    contacts() {
      return get(["$frontmatter", "contact"], this) || {};
    }
  }
};
</script>

<style lang="stylus" scoped></style>
