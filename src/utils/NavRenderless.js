import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['show', 'images']),
    ...mapGetters(['total'])
  },
  methods: {
    ...mapActions(['CHANGE_SHOW'])
  },
  mounted(){
      console.log('Renderless mounted')
  },
  render() {
    return this.$scopedSlots.default({
      show: this.show,
      images: this.images,
      total: this.total,
      CHANGE_SHOW: this.CHANGE_SHOW
    });
  },
};
