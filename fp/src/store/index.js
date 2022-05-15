import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
    setPaymentListData(state, payload) {
        if (state.paymentList.length === 0) {
            state.paymentList = payload;
          } else {
            state.fastPayment = state.paymentList;
          }
    },
    addDataToPaymentList(state, payload) {
        state.paymentList.push(payload)
    },
    setCategories(state, payload) {
        state.categoryList = payload
    },
    setNewCategory(state, payload) {
        const newCategoryArr = payload;
        state.categoryList.push(...newCategoryArr);
      },
    // editPaymentListFirstElement(state, payload) {
    //     Vue.set(state.paymentList, 0, payload)
    // }
}

const getters = {
    getPaymentList: state => state.paymentList,
    getFullPaymentValue: state => {
        return state.paymentList.reduce((res, cur) => res + cur.value, 0)
    },
    getCategoryList: state => state.categoryList
}

export default new Vuex.Store({
    state: {
        paymentList: [],
        categoryList: [],
        fastPayment: [],
    },
    mutations,
    actions: {
        fetchData({commit}) {
            return new Promise((resolve)=>{
              setTimeout(()=>{
                const items = []
                for(let i=1; i<=50; i++) {
                  items.push({
                    date: "23.12.2022",
                    category: "Sport",
                    value: i,
                    id: Math.floor(Math.random()* Math.floor(Math.random() * Date.now()) +i)
                  })
                } resolve(items)
              },2000)
            }).then(res=> {
              commit('setPaymentListData', res)
            })
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve (['Food', 'Transport', 'Education', 'Entertainment'])
                }, 1000)
            }).then (res => {
                commit('setCategories', res)}
        )}
    },
    getters
})