import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../../pages/MainPage/MainPage.vue";
import ProductPage from "../../pages/ProductPage/ProductPage.vue";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage.vue";
import CreateProduct from "../../pages/CreateProduct/CreateProduct.vue";
import SignupPage from '../../pages/SignupPage/SignupPage.vue'
import LoginPage from '../../pages/LoginPage/LoginPage.vue';

const routes = [
  {
    path: "/",
    name:"Home",
    component: MainPage,
  },
  {
    path: "/products/",
    name:"Products",
    component: ProductPage,
  },
  {
    path: "/checkout/",
    name:"Checkout",
    component: CheckoutPage,
  },
  {
    path: "/create/",
    name:"Create",
    component: CreateProduct,
  },
  {
    path: "/signup/",
    name:"signup",
    component: SignupPage,
  },
  {
    path: "/login/",
    name:"login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
