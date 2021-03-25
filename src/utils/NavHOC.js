import { mapState, mapGetters, mapActions } from "vuex";
export default (component) => ({
  computed: {
    ...mapState(["show"]),
    ...mapGetters(["total"]),
  },
  methods: {
    ...mapActions(["CHANGE_SHOW"]),
  },
  mounted() {
    console.log("Renderless mounted");
  },
  render(h) {
    return h("div", [
      h(component, {
        props: {
          show: this.show,
          total: this.total,
        },
        on: {
          change: this.CHANGE_SHOW,
        },
      }),
    ]);
  },
});
