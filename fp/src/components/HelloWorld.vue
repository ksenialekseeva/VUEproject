<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <input v-model.number="operand1">
    <br>
    <input v-model.number="operand2">
    <hr/>
    = {{ result}}
    <br>
    <button @click="sum">+</button>
    <button @click="sub">-</button>
    <button @click="mul">*</button>
    <button @click="div" :disabled="operand2 === 0">/</button>
    <button @click="pow">^</button>
    <button @click="floor" :disabled="operand2 === 0">без остатка</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
    }
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2
    },
    sub() {
      this.result = this.operand1 - this.operand2
    },
    mul() {
      this.result = this.operand1 * this.operand2
    },
    div() {
      this.result = this.operand1 / this.operand2
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    floor() {
      this.result = Math.floor(this.operand1 / this.operand2)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 10px 0 0;
}
input {
  margin: 0 0 10px;
}
</style>
