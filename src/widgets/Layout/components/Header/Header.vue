<script>
import { logout } from "../../../../shared/service/RegisterService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import ProductCart from "../../../../entites/ProductCart/ProductCart.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
      registered: "",
    };
  },
  components: {
    ProductCart,
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    async logOut() {
      try {
        await logout();
        localStorage.removeItem("token");
        toast.success("Вы вышли из системы.", {
          autoClose: 1000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.registered = localStorage.getItem("token");
  },
};
</script>

<template>
  <div class="header">
    <h3 class="header_title">Coffee Shop</h3>

    <div class="header_menu">
      <div class="box">
        <div
          id="hamburger"
          :class="{ hamburger: true, close: isMenuOpen }"
          @click="toggleMenu"
        >
          <samp></samp>
          <samp></samp>
          <samp></samp>
        </div>
      </div>

      <ul :class="{ menu_list: true, 'now-active': isMenuOpen }">
        <RouterLink class="menu_item" to="/">Home</RouterLink>
        <RouterLink class="menu_item" to="/products/">Products</RouterLink>
        <RouterLink class="menu_item" to="/checkout/">Checkout</RouterLink>
        <div v-if="!registered" class="mobile_register">
          <RouterLink class="menu_item" to="/login/">Log in</RouterLink>
          <RouterLink class="menu_item" to="/signup/">Sign up</RouterLink>
        </div>
        <div v-else class="mobile_register">
          <button class="mobile_btn" @click="logOut">Log out</button>
        </div>
      </ul>
    </div>
    <div class="register_links" v-if="!registered">
      <RouterLink class="register_link" to="/login/">
        <img
          src="../../../../shared/assets/icons/log-in (1).png"
          alt=""
          class="register_img"
        />
        <p class="link_text">Log in</p>
      </RouterLink>

      <RouterLink class="register_link" to="/signup/">
        <img
          src="../../../../shared/assets/icons/add-user (1).png"
          alt=""
          class="register_img"
        />
        <p class="link_text">Sign up</p>
      </RouterLink>
    </div>
    <div class="logout" v-else>
      <button class="logout_btn" @click="logOut">
        <img
          src="../../../../shared/assets/icons/logout (2).png"
          alt=""
          class="logout_img"
        />
        <p class="link_text">Log out</p>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./Header.scss";
</style>
