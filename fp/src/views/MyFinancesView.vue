<template>
  <div class="finances">
    <header>
    <h1 class="headerTitle">My personal costs</h1>
    </header>
    <main>
    <AddPaymentForm @addNewPayment="addPaymentData"/>
    <PaymentsDisplay :items="paymentList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'MyFinancesView',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data() {
      return {
          paymentList: []
      }
  },
  methods: {
      addPaymentData(data) {
          this.paymentList.push(data)
      },
      fetchData() {
          return [
              {
                date: "28.04.2022",
                category: "Sport",
                value: "1000",
              },
              {
                date: "29.04.2022",
                category: "Food",
                value: "1700",
              },
              {
                date: "30.04.2022",
                category: "Food",
                value: "400",
              },
          ];
      },
  },
  created() {
      this.paymentList = this.fetchData()
  },
};
</script>

<style lang="scss" scoped>

</style>
