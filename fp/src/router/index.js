import Vue from 'vue'
import Router from 'vue-router'

import MyFinancesView from '../views/MyFinancesView.vue'
import CalculatorView from '../views/Calculator/CalculatorView.vue'
import AddPaymentView from '../views/AddPaymentView.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(Router)

const routes = [
    {
        path: "/dashboard/:page",
        name: "Dashboard",
        component: MyFinancesView,
        
    },
    {
        path: "/calculator",
        name: "Calculator",
        component: CalculatorView
    },
    {
        path: "/addpayment",
        name: "AddPayment",
        component: AddPaymentView
    },
    {
        path: "/add/:section/:category",
        name: "AddPaymentForm",
        component: AddPaymentForm
    }
]

export default new Router ({
    mode: "history",
    routes
})