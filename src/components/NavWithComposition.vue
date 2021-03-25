<template>
  <div>
    <button @click="CHANGE_SHOW(show-1)">←</button>
    <button v-for="num in total" :key="num-1" @click="CHANGE_SHOW(num-1)">{{ num }}</button>
    <button @click="CHANGE_SHOW(show+1)">→</button>
  </div>
</template>

<script>
import useNav from '@/utils/NavComposition'
export default {
  setup() {
    let { show, total, CHANGE_SHOW } = useNav()
    return {
      show,
      total,
      CHANGE_SHOW
    }
  },
}
</script>