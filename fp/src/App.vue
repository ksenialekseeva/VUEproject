<template>
  <div id="app">
    <MyFinancesView />
  </div>
</template>

<script>
import MyFinancesView from './views/MyFinancesView.vue'
export default {
  name: 'App',
  components: {
    MyFinancesView
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
