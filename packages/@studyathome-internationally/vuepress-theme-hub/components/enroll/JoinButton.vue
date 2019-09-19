<template>
  <b-link :href="mailto()" class="link" style="display: flex;">
    <b-button class="join-button" variant="info">
      Join
      <font-awesome-icon icon="mail-bulk" />
    </b-button>
  </b-link>
</template>

<script>
export default {
  props: {
    enrollment: {
      type: Object,
      required: true
    }
  },
  data() {
    return this.enrollment;
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
      // FIXME
      // https://stackoverflow.com/questions/22765834/insert-a-line-break-in-mailto-body
      const body = encodeURI
        ? encodeURI(this.body.replace(/\\n/g, "%0D%0A"))
        : this.body;
      return this.construct("body", body);
    },
    bodyN: function() {
      return encodeURI(this.body);
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