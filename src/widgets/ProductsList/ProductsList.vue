<script>
import ProductCard from "../../entites/ProductCard/ProductCard.vue";
import { getProducts } from "../../shared/service/productsService";
import ProductCart from "../../entites/ProductCart/ProductCart.vue";
import { getCart } from "../../shared/service/CartService";

export default {
  components: {
    ProductCard,
    ProductCart,
  },

  data() {
    return {
      info: [],
      filteredData: [],
      searchValue: "",
      showCart: false,
      cart: [],
    };
  },

  methods: {
    async getProducts() {
      try {
        const data = await getProducts();
      

        this.info = data;
      } catch (e) {
        console.log(e);
      }
    },
    async getData() {
      try {
        const response = await getCart();
        this.cart = response;
      } catch (err) {
        console.log(err);
      }
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
    filteredProducts() {
      if (!this.info.products) return [];
      return this.info.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
  mounted() {
    this.getProducts();
    this.filteredProducts();
    this.getData();
  },
};
</script>
<template>
  <div class="product_block">
    <div class="cart">
      <button class="logout_btn_cart" @click="toggleCart">
        <img src="../../shared/assets/icons/shopping-cart (1).png" alt="" />
        <p class="cart_qauntity">{{ cart.cart?.length }}</p>
      </button>
    </div>
    <div :class="{ cart_sidebar: true, show: showCart }">
      <ProductCart :closeCart="toggleCart" :cart="cart" :getData="getData" :products="info.products" />
    </div>
    <div class="products_head">
      <h3 class="products_title">Our products</h3>
      <div class="search_form">
        <input
          type="search"
          class="form_input"
          placeholder="Search product"
          @input="filteredProducts()"
          v-model="searchValue"
        />
        <button class="form_btn">
          <img
            src="../../shared/assets/icons/search.png"
            alt=""
            class="form_img"
          />
        </button>
      </div>
      <div class="filters">
        <button class="filterbtn">Coffee</button>
        <button class="filterbtn">Tea</button>
        <button class="filterbtn">Сocktail</button>
      </div>
    </div>
    <div class="empty_message" v-if="info.products?.length === 0">
      <p class="message_text">У вас нет продуктов.</p>
    </div>
    <div class="products_cards" v-else>
      <div v-for="el in filteredProducts()" :key="el.id">
        <div class="product_card">
          <ProductCard :product="el" :getData="getData" :products="info.products" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./ProductsList.scss";
</style>
