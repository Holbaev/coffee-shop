<script>
import { postCart, postCart2 } from "../../shared/service/CartService";
import { postProducts } from "../../shared/service/productsService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      data: null,
      quantity: 1,
    };
  },
  props: {
    product: Object,
    getData: Function,
    products: Array,
  },

  methods: {
    async postData(id) {
      try {
        this.products?.forEach((product) => {
          if (product.id === id) {
            product.status = true; 
          }
        });
        await postProducts(this.products)
        this.product.quantity = this.quantity;
        const response = await postCart(this.product);
        toast.success("Продукт успешно добавлен.", {
          autoClose: 1000,
        });
        this.quantity = 1;
        this.getData();
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
  },
};
</script>

<template>
  <div class="products_card">
    <div class="card_image">
      <img :src="product.image" alt="" class="card_img" />
    </div>
    <div class="card_content">
      <h3 class="card_title">{{ product.name }}</h3>
      <p class="card_text">{{ product.description }}</p>
      <div class="card_flex">
        <p class="card_price">{{ product.price }}$</p>
        <div class="successed" v-if="product.status">
          <p class="successed_text">Product added successfully.</p>
        </div>
        <div class="quantity_box" v-else>
          <p class="quantity_text">Quantity:</p>
          <input
            class="quantity_input"
            type="number"
            v-model="quantity"
            min="1"
            max="10"
          />
          <button class="card_btn" @click="postData(product.id)">
            Make an order >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./ProductCard.scss";
</style>
