<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'Dashboard', params: {page: '1'}}">MyFinances</router-link> | 
      <router-link to="/calculator">Calculator</router-link> | 
      <router-link to="/addpayment">AddPayment</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
