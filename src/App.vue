<template>
  <div id="app">
    <NavRenderless>
      <template slot-scope="{ show, images }">
        <transition-group tag="div" class="container" name="fade">
          <div
            class="page"
            v-for="(item, index) of images"
            v-show="index === show"
            :key="item.src"
          >
            <img :src="item.src" />
          </div>
        </transition-group>
      </template>
    </NavRenderless>

    <div class="container">
      <h1>NavWithMixin</h1>
      <NavWithMixin />

      <h1>NavWithHOC</h1>
      <NavWithHOC />

      <h1>NavRenderless</h1>
      <NavRenderless>
        <template slot-scope="{ show, total, CHANGE_SHOW }">
          <NavComponent v-bind="{ show, total }" @change="CHANGE_SHOW" />
        </template>
      </NavRenderless>

      <h1>NavWithComposition</h1>
      <NavWithComposition />
    </div>
  </div>
</template>

<script>
import NavWithMixin from './components/NavWithMixin.vue'
import WithNav from './utils/NavHOC.js'
import NavComponent from './components/Nav.vue'
import NavRenderless from './utils/NavRenderless.js'
import NavWithComposition from './components/NavWithComposition.vue'
export default {
  name: 'App',
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
  display: flex;
}
.container {
  position: relative;
  width: 320px;
  height: 480px;
  margin: 0 auto;
}
.page {
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
.tooltip {
  display: block !important;
  z-index: 10000;
  font-size: 12px;
}
.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}
.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
}
.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}
.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}
.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[x-placement^='right'] {
  margin-left: 5px;
}
.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.tooltip[x-placement^='left'] {
  margin-right: 5px;
}
.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}
.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
