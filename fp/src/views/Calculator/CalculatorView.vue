<template>
  <div class="calculator">
    <h1>Try this calculator right now</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'CalculatorView',
  components: {
    Calculator
  }
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
</style>