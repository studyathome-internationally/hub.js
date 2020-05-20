<template>
  <div>
    <h1>{{ $page.title }}</h1>
    <div class="overview">
      <Figure class="portrait" :src="src" :zoom="false" />
      <Information class="information" />
    </div>
  </div>
</template>

<script>
import { get } from "@theme/utils/object.js";

import Information from "@theme/components/lecturer/page/Information.vue";
import Figure from "@theme/components/general/Figure.vue";

export default {
  name: "Overview",
  components: { Figure, Information },
  computed: {
    src() {
      return get(["$frontmatter", "portrait"], this) || "";
    }
  }
};
</script>

<style lang="stylus"></style>
