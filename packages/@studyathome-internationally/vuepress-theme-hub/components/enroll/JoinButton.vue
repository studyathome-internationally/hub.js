<template>
  <b-link :href="mailto()" class="link">
    <b-button class="join-button" variant="info">
      <span>Join the Course!</span>
      <font-awesome-icon icon="mail-bulk" />
    </b-button>
  </b-link>
</template>

<script>
export default {
  data() {
    return {
      to: ["funny@uni.at", "funny@uni.de"],
      subject: "Subject line",
      cc: ["funny@fh.at", "funny@fh.de"],
      bcc: ["funny@project.at", "funny@project.de"],
      body: "This is the body."
    };
  },
  methods: {
    mailto: function() {
      return `mailto:?${this.getTo}${this.getSubject}${this.getCC}${this.getBCC}${this.getBody}`;
    },
    construct: function(label, elems) {
      let entry = elems;
      if (typeof elems === "Array") entry = elems.join(",");
      entry = escape ? escape(entry) : entry;
      return `&${label}=${entry}`;
    }
  },
  computed: {
    getTo: function() {
      return this.construct("to", this.to);
    },
    getSubject: function() {
      return this.construct("subject", this.subject);
    },
    getCC: function() {
      return this.construct("cc", this.cc);
    },
    getBCC: function() {
      return this.construct("bcc", this.bcc);
    },
    getBody: function() {
      return this.construct("body", this.body);
    }
  }
};
</script>

<style lang="scss" scoped>
.link:hover {
  text-decoration: none !important;
}
.container {
  display: flex;
}
.join-button {
  flex: 1;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>