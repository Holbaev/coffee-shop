<script>
import { deleteCart } from "../../shared/service/CartService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { postProducts } from "../../shared/service/productsService";

export default {
  data() {
    return {};
  },
  props: {
    closeCart: {
      type: Function,
    },
    cart: {
      type: Array,
    },
    getData: {
      type: Function,
    },
    products: {
      type: Array,
    },
  },

  methods: {
    async deleteData(id) {
      try {
        this.products?.forEach((product) => {
          if (product.id === id) {
            product.status = false;
          }
        });
        await postProducts(this.products);
        const elem = this.cart.cart?.filter((el) => el.id === id);
        const response = await deleteCart(elem[0]);
        toast.success("Продукт успешно убран.", {
          autoClose: 1000,
        });
        this.getData();
      } catch (err) {
        console.log(err);
      }
    },
    goToPap() {
      this.$router.push({ path: "/checkout/" });
    },
  },
};
</script>
<template>
  <div class="cart_wrapper">
    <div class="cart_head">
      <h3 class="cart__title">Cart</h3>
      <button class="cart_close" @click="closeCart">
        <img src="../../shared/assets/icons/close (1).png" alt="" />
      </button>
    </div>
    <div class="cart_overflow">
      <div class="empty_array" v-if="cart.cart?.length === 0">
        <p class="empty_text">You don't have products</p>
      </div>
      <div v-else class="cart_cards">
        <div v-for="el in cart.cart" :key="el.id">
          <div class="cart_item">
            <div class="cart_image">
              <img :src="el.image" alt="" class="cart_img" />
              <p class="cart_qauntity">{{ el.quantity }}</p>
            </div>
            <div class="cart_content">
              <h3 class="cart_title">{{ el.name }}</h3>
              <p class="cart_price">{{ el.price }}$</p>
              <button class="delete_btn" @click="deleteData(el.id)">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart_total_price">
      <p class="price_text">
        Total:
        {{ cart.cart?.reduce((acc, product) => acc + (product.price * product.quantity), 0) }}$
      </p>
      <button class="price_btn" @click="goToPap">Go to pay</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./ProductsCart.scss";
</style>
