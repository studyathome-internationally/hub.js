<template>
  <li>
    <font-awesome-icon :icon="icon"></font-awesome-icon>
    <a :href="href" rel="noopener" target="_blank"
      >{{ label }}<OutboundLink v-if="$vnode.key !== 'mail' && $vnode.key !== 'tel'"
    /></a>
  </li>
</template>

<script>
import { get } from "@theme/utils/object.js";

export default {
  name: "Contact",
  props: {
    contact: {
      type: [String, Object],
      required: true,
      default: null,
    },
  },
  computed: {
    href() {
      let href = "";
      if (typeof this.contact === "string") {
        href = this.contact;
      } else {
        href = this.contact.href;
      }
      if (this.$vnode.key === "mail") href = `mailto:${href}`;
      else if (this.$vnode.key === "tel") href = `tel:${href}`;
      return href;
    },
    label() {
      let label = "";
      if (typeof this.contact === "string") {
        if (this.$vnode.key === "tel") label = this.href.replace("tel:", "");
        else if (this.$vnode.key === "mail") label = this.href.replace("mailto:", "");
        else if (this.$vnode.key === "linkedin") label = "LinkedIn";
        else if (this.$vnode.key === "reasearchgate") label = "ResearchGate";
      } else {
        label = this.contact.label;
      }
      return label;
    },
    icon() {
      let icon = ["fas", "globe"];
      if (typeof this.contact === "string") {
        if (this.$vnode.key === "tel") icon = ["fas", "phone-alt"];
        else if (this.$vnode.key === "mail") icon = ["fas", "envelope"];
        else if (this.$vnode.key === "linkedin") icon = ["fab", "linkedin"];
        else if (this.$vnode.key === "reasearchgate") icon[("fab", "researchgate")];
      } else {
        icon = this.contact.icon.split("-");
      }
      return icon;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
