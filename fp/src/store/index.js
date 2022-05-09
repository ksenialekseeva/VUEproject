import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
    "page1": [
        { "id": 1, "date": "20.03.2022", "category": "Food", "value": 169 },
        { "id": 2, "date": "21.03.2022", "category": "Navigation", "value": 50 },
        { "id": 3, "date": "22.03.2022", "category": "Sport", "value": 450 }
    ],
    "page2": [
        { "id": 4, "date": "23.03.2022", "category": "Entertaiment", "value": 969 },
        { "id": 5, "date": "24.03.2022", "category": "Education", "value": 1500 },
        { "id": 6, "date": "25.03.2022", "category": "Food", "value": 200 }
    ],
    "page3": [
        { "id": 7, "date": "26.03.2022", "category": "Sport", "value": 2000 },
        { "id": 8, "date": "27.03.2022", "category": "Food", "value": 500 },
        { "id": 9, "date": "28.03.2022", "category": "Food", "value": 800 }
    ],
    "page4": [
        { "id": 10, "date": "29.03.2022", "category": "Entertaiment", "value": 5000 },
        { "id": 11, "date": "30.03.2022", "category": "Entertaiment", "value": 300 },
        { "id": 12, "date": "31.03.2022", "category": "Food", "value": 4000 }
    ]
}

const mutations = {
    setPaymentListData(state, payload) {
        const newUniqueIdsObs = payload.filter((item) => {
            return state.paymentListIds.indexOf(item.id) < 0
        })
        const uniqueIds = newUniqueIdsObs.map((obj) => obj.id)
        state.paymentListIds.push(...uniqueIds)
        state.paymentList.push(...newUniqueIdsObs)
    },
    addDataToPaymentList(state, payload) {
        state.paymentList.push(payload)
    },
    setCategories (state, payload) {
        state.categoryList = payload
    },
    editPaymentListFirstElement(state, payload) {
        Vue.set(state.paymentList, 0, payload)
    }
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
        paymentListIds: []
    },
    mutations,
    actions: {
        fetchData({commit}, page) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = localDB[`page${page}`]
                    resolve(items)
                }, 1000)
            }).then((res) => {
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