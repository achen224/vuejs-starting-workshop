import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:0,
    images:[
        { src:'./images/sc/1.jpg' },
        { src:'./images/sc/2.jpg' },
        { src:'./images/sc/3.jpg' },
        { src:'./images/sc/4.jpg' },
        { src:'./images/sc/5.jpg' }
    ]
  },
  getters:{
    total(state){
      return state.images.length
    }
  },
  mutations: {
    SET_SHOW(state,index){
      state.show = index
    }
  },
  actions: {
    CHANGE_SHOW({getters,commit},index){
      let lastIndex = getters.total -1
      index = index < 0 ?  lastIndex : index > lastIndex ? 0 : index
      commit("SET_SHOW",index)
    }
  },
  modules: {
  }
})
