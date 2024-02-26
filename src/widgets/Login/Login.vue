<script>
import LoginForm from '../../entites/LoginForm/LoginForm.vue';
export default {
    name: "CoffeeShopLogin",
    data() {
        return {};
    },
    mounted() { },
    methods: {},
    components: { LoginForm }
};
</script>
<template>
   <div class="login">
    <RouterLink class="home_link" to="/">
        <img src="../../shared/assets/icons/home.png" alt="">
      </RouterLink>
    <div class="login_content">
      <h3 class="login_title">Hallo, Teman !</h3>
      <p class="login_text">
        Masukan Informasi detail Anda dan Mulai Berpetualang Bersama Saya
      </p>
      <RouterLink to="/signup/">
        <button class="login_btn">SIGN UP</button>
      </RouterLink>
    </div>
    <div class="login_form">
        <LoginForm/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Login.scss";
</style>
