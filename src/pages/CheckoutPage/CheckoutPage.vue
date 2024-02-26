<script>
import LayoutVue from '../../widgets/Layout/Layout.vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { getCart } from '../../shared/service/CartService';

export default {
  components: {
    LayoutVue,
  },

  data() {
    return {
      info:[],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await getCart();
        this.info = response;
      } catch (err) {
        console.log(err);
      }
    },
    goToPap() {
      this.$router.push({ path: "/products/" });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <LayoutVue>
    <div class="checkout">
      <div class="checkout_head">
        <div class="checkout_cart">
          <h3 class="cart_title">Shopping Cart</h3>
          <div class="table_wrapper">
            <div class="cart_table">
              <div class="table_head">
                <div class="head_item">
                  <p class="head_text">Product</p>
                </div>
                <div class="head_item">
                  <p class="head_text">Quality</p>
                </div>
                <div class="head_item">
                  <p class="head_text">Total Price</p>
                </div>
              </div>
              <hr color="#000">
              <div class="empty_array" v-if="info.cart?.length === 0">
                  <p class="empty_text">У вас нет продуктов</p>
              </div>
              <div v-else>
                <div  class="table_body"  v-for="el in info.cart" :key="el.id">
                  <div class="body_track">
                    <div class="body_item cart_flex">
                      <img
                        :src="el.image"
                        alt=""
                        class="cart_img"
                      />
                      <h3 class="card_title">Coffee</h3>
                    </div>
                    <div class="body_item cart_quality">
                      <p class="index">{{ el.quantity }}</p>
                    </div>
                    <div class="body_item cart_flex">
                      <p class="cart_price">{{ el.price }}$</p>
                    </div>
                  </div>
                  <hr color="#000"     width="100%">
                </div>
              </div>
            </div>
          </div>
          <div class="cart_total">
            <p class="total_price">Total: {{ info.cart?.reduce((acc, product) => acc + (product.price * product.quantity), 0) }}$</p>
          </div>
        </div>
        <div class="checkout_pay">
          <h3 class="pay_title">Pay By</h3>
          <div class="pay_flex">
            <button class="pay_btn">
              <img
                src="../../shared/assets/img/pay-1.png"
                alt=""
                class="pay_img"
              />
            </button>
            <button class="pay_btn">
              <img
                src="../../shared/assets/img/pay-2.png"
                alt=""
                class="pay_img"
              />
            </button>
            <button class="pay_btn">
              <img
                src="../../shared/assets/img/pay-3.png"
                alt=""
                class="pay_img"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="checkout_back">
        <button class="back_btn" @click="goToPap">Back to Order</button>
      </div>
    </div>
  </LayoutVue>
</template>

<style lang="scss" scoped>
@import "./CheckoutPage.scss";
</style>
