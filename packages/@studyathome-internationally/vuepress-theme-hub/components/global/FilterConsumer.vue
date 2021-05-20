<script>
import { mapMutations } from "vuex";

export default {
  name: "FilterConsumer",
  render: (h) => h,
  methods: {
    ...mapMutations(["updateFilter"]),
  },
  created() {
    const filter = this.$route.query.filter ? window.decodeURIComponent(this.$route.query.filter).split(",") : [];
    this.$store.commit("updateFilter", filter);
    if (filter.length > 0) this.$router.replace({ query: null });
  },
};
</script>

<style lang="stylus" scoped></style>
