<script>
import { RouterLink } from "vue-router";
import SignupForm from '../../entites/SignupForm/SignupForm.vue';

export default {
  name: "CoffeeShopSignup",

  data() {
    return {

    };
  },
  components:{
    SignupForm
  },    

  mounted() {},

  methods: {},
};
</script>
<template>
    <div class="signup">
      <RouterLink class="home_link" to="/">
        <img src="../../shared/assets/icons/home.png" alt="">
      </RouterLink>
    <div class="signup_content">
      <h3 class="signup_title">Selamat Datang Kembali!</h3>
      <p class="signup_text">
        Untuk tetap berhubungan dengan saya Silakan login dengan informasi
        personal anda
      </p>
      <RouterLink to="/login/">
        <button class="signup_btn">SIGN IN</button>
      </RouterLink>
    </div>
    
    <div class="signup_form">
        <SignupForm/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Signup.scss";
</style>
