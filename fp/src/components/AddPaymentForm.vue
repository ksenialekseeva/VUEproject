<template>
    <div class="paymentForm">
        <button @click="addNewCost=!addNewCost">ADD NEW COST +</button>
        <div class="addNewForm" v-show="addNewCost">
        <input v-model="date" placeholder="enter date" />
        <select v-model="category" v-if="categoryList">
            <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
        </select>
        <NewCategoryForm />
        <input v-model.number="value" placeholder="enter value" />
        <button @click="onClickSave">Save</button>
        </div>
    </div>
</template>

<script>
import NewCategoryForm from "@/components/NewCategoryForm.vue";

export default {
    components: {
        NewCategoryForm,
    },
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
        const {category, section} = this.$route.params
        if(!category || !section) {
            return
        }
        this.category = category
        const {value} = this.$route.query
        if(!value) return
        this.value = value
        if(this.value && this.category) {
            this.onClickSave()
        }
    },
}
</script>

<style scoped>
.addNewForm {
    display: flex;
    justify-content: center;
    margin: 10px;
}
</style>