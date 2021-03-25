<template>
  <div>
    <button @click="CHANGE_SHOW(show-1)">←</button>
    <button v-for="num in total" :key="num-1" @click="CHANGE_SHOW(num-1)">{{ num }}</button>
    <button @click="CHANGE_SHOW(show+1)">→</button>
  </div>
</template>

<script>
import NavMixin from '@/utils/NavMixin'
export default {
  mixins: [NavMixin],
  // data(){
  //     return {
  //         show:5
  //     }
  // },
  mounted() {
    console.log('NavWithMixin mounted')
  },
}
</script>