import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['show']),
    ...mapGetters(['total'])
  },
  methods: {
    ...mapActions(['CHANGE_SHOW'])
  },
  mounted(){
      console.log('Mixin mounted')
  }
};
