<template>
    <div class="paymentForm">
        <button @click="addNewCost=!addNewCost">ADD NEW COST +</button>
        <div v-show="addNewCost">
        <input v-model="date" placeholder="enter date" />
        <select v-model="category" v-if="categoryList">
            <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
        </select>
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
        },
        categoryList() {
            return this.$store.getters.getCategoryList
        }
    },
    methods: {
        onClickSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: this.value
            }
            this.$store.commit('addDataToPaymentList', data)
            // this.$emit('addNewPayment', data)
        }
    },
    async created() {
        await this.$store.dispatch('fetchCategoryList')
    },
    mounted() {
    }
}
</script>