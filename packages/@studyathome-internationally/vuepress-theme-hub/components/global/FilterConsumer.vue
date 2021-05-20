<script>
import { mapMutations } from "vuex";

export default {
  name: "FilterConsumer",
  render: (h) => h,
  methods: {
    ...mapMutations(["updateFilter"]),
  },
  created() {
    const hosts = this.$route.query.hosts ? window.decodeURIComponent(this.$route.query.hosts).split(",") : [];
    this.$store.commit("updateFilterHosts", hosts);
    // if (filter.length > 0) this.$router.replace({ query: null });
  },
};
</script>

<style lang="stylus" scoped></style>
