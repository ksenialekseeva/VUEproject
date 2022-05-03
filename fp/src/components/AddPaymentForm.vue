<template>
    <div class="paymentForm">
        <button @click="addNewCost=!addNewCost">ADD NEW COST +</button>
        <div v-show="addNewCost">
        <input v-model="date" placeholder="enter date" />
        <input v-model="category" placeholder="enter category" />
        <input v-model.number="value" placeholder="enter value" />
        <button @click="onClickSave">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
            date: "",
            category: "",
            value: "",
            addNewCost: false
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            return new Intl.DateTimeFormat("ru", {
                year: "numeric", 
                month: "2-digit", 
                day: "2-digit"}).format(today);
        }
    },
    methods: {
        onClickSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: this.value
            }
            this.$emit('addNewPayment', data)
        }
    }
}
</script>