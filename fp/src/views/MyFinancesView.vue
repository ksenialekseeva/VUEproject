<template>
  <div class="finances">
    <header>
    <h1 class="headerTitle">My personal costs</h1>
    <div>Total price = {{ getFullPaymentValue }}</div>
    </header>
    <main>
    <AddPaymentForm @addNewPayment="addPaymentData"/>
    <PaymentsDisplay :items="currentElements"/>
    <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue';
import AddPaymentForm from '@/components/AddPaymentForm.vue';
import { mapMutations, mapGetters } from 'vuex';
import MyPagination from '@/components/MyPagination.vue';

export default {
  name: 'MyFinancesView',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination
  },
  data() {
      return {
        cur: 1,
        n: 3,
      }
  },
  computed: {
    ... mapGetters(['getFullPaymentValue', 'getPaymentList']),
    currentElements() {
      return this.getPaymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    }
  },
  methods: {
    ... mapMutations([
      'setPaymentListData'
    ]),
      addPaymentData(data) {
          this.paymentList.push(data)
      },
      changePage(p) {
        this.cur = p
        this.$store.dispatch('fetchData', p)
      }
  },
  async created() {
      await this.$store.dispatch('fetchData', this.cur)
      // this.setPaymentListData(this.fetchData())
      // this.$store.commit('setPaymentListData', this.fetchData())
  },
};
</script>

<style lang="scss" scoped>

</style>
