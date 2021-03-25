<template>
  <div id="app">
    <transition-group tag="div" class="container" name="fade">
      <div v-for="(item, index) of images" v-show="index === show" :key="item.src">
        <img :src="item.src" />
      </div>
    </transition-group>
    <h1>NavWithMixin</h1>
    <NavWithMixin />
    <h1>NavWithHOC</h1>
    <NavWithHOC />
    <h1>NavRenderless</h1>
    <NavRenderless>
      <template slot-scope="{ show, total, CHANGE_SHOW }">
        <NavComponent v-bind="{show, total}" @change="CHANGE_SHOW" />
      </template>
    </NavRenderless>
    <h1>NavWithComposition</h1>
    <NavWithComposition />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavWithMixin from './components/NavWithMixin.vue'
import WithNav from './utils/NavHOC.js'
import NavComponent from './components/Nav.vue'
import NavRenderless from './utils/NavRenderless.js'
import NavWithComposition from './components/NavWithComposition.vue'
export default {
  name: 'App',
  computed: {
    ...mapState(['show', 'images']),
  },
  components: {
    NavWithMixin,
    NavWithHOC: WithNav(NavComponent),
    NavRenderless,
    NavComponent,
    NavWithComposition,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  position: relative;
  width: 320px;
  height: 480px;
  margin: 0 auto;
}
.container > div {
  position: absolute;
  width: 320px;
  height: 480px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
