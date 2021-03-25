<template>
  <div>
    <button @click="$emit('change',show-1)" v-tooltip.auto="'Prev'">←</button>
    <button v-for="num in total" :key="num-1" @click="$emit('change',num-1)">{{ num }}</button>
    <button @click="$emit('change',show+1)" v-tooltip.auto="'Next'">→</button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    mounted() {
      console.log('Nav mounted')
    },
  },
}
</script>