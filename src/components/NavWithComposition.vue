<template>
  <div v-hotkey="keyMap">
    <button @click="CHANGE_SHOW(show-1)">←</button>
    <button v-for="num in total" :key="num-1" @click="CHANGE_SHOW(num-1)">{{ num }}</button>
    <button @click="CHANGE_SHOW(show+1)">→</button>
  </div>
</template>

<script>
import useNav from '@/utils/NavComposition'
import { computed } from '@vue/composition-api'
export default {
  setup() {
    const { show, total, CHANGE_SHOW } = useNav()
    const keyMap = computed(() => ({
      left: () => CHANGE_SHOW(show.value - 1),
      right: () => CHANGE_SHOW(show.value + 1),
    }))
    return {
      show,
      total,
      CHANGE_SHOW,
      keyMap,
    }
  },
}
</script>