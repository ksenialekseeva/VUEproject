<template>
  <div class="addpayment">
    <h1>Add your payment fast</h1>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Education'}, query: {value: 200}}">Education 200</router-link><br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 50}}">Transport 50</router-link><br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 2000}}">Entertainment 2000</router-link><br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 700}}">Food 700</router-link>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentView',
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