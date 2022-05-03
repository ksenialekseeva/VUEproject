<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <input v-model.number="operand1" placeholder="Введите первое число">
    <br>
    <div class="operations">
    <button 
      v-for="operand in operands"
      v-bind:key="operand"
      v-bind:title="operand"
      @click="calculate(operand)">
      {{ operand }}
    </button>
    </div>
    <br>
    <input v-model.number="operand2" placeholder="Введите второе число">
    <hr/>
    = {{ result}}
    <div class="strange-msg">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div>
    <div class="error" v-show="error">Ошибка! {{ error }}</div>
    <br>
    <div class="keycheck">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Показать экранную клавиатуру</label>
    </div>
    <div v-show="checked" class="keyboard">
    <div class="keyboard-btns">
    <button 
      v-for="number in numbers"
      v-bind:key="number"
      v-bind:title="number"
      @click="enter(number)">
      {{ number }}
    </button>
    <button @click="delNum()">Del</button>
    </div>
    <div class="radio-btns">
    <input type="radio" id="operand1" value="operand 1" v-model="picked">
    <label for="operand1">Операнд 1</label>
    <input type="radio" id="operand2" value="operand 2" v-model="picked">
    <label for="operand2">Операнд 2</label>
    </div>
    <br>
    </div>
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
      operand1: '',
      operand2: '',
      operands: ['+', '-', '*', '/', '^', 'без остатка'],
      error: '',
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      checked: false,
      picked: 'operand 1',
    }
  },
  methods: {
    calculate(operation = "+") {
      this.error = ''
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.mul();
          break;
        case "/":
          this.div();
          break;
        case "^":
          this.pow();
          break;
        case "без остатка":
          this.floor();
          break;
      }
    },
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
      const { operand1, operand2 } = this
      if (operand2 === 0) {
      this.error = 'Делить на 0 нельзя!'
      } else {
      this.result = operand1 / operand2
      }
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    floor() {
      const { operand1, operand2 } = this
      if (operand2 === 0) {
      this.error = 'Делить на 0 нельзя!'
      } else {
      this.result = Math.floor(operand1 / operand2)
      }
    },
    enter(number) {
      switch (this.picked) {
        case "operand 1":
          this.operand1 += number;
          break;
        case "operand 2":
          this.operand2 += number;
          break;
      }
    },
    delNum() {
      switch (this.picked) {
        case "operand 1":
          this.operand1 = this.operand1.substring(0, this.operand1.length - 1);
          break;
        case "operand 2":
          this.operand2 = this.operand2.substring(0, this.operand2.length - 1);
          break;
      }
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
.error {
  color: red;
  font-weight: 600;
}
.keycheck {
  margin: 10px 0 0;
}
.radio-btns {
  margin: 10px 0;
}
.radio-btns label {
  margin: 0 10px 0 5px;
}
</style>
