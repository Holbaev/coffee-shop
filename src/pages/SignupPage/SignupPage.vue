<script>
import Signup from '../../widgets/Signup/Signup.vue';
export default {
  name: "CoffeeShopSignupPage",

  data() {
    return {};
  },
  components:{
    Signup
  },

  mounted() {},

  methods: {},
};
</script>
<template>
  <div class="signip_wrapper">
    <Signup/>
  </div>
</template>

<style lang="scss" scoped>
@import "./SignupPage.scss";
.signip_wrapper{
    width: 100%;
    height: 100vh;
    background: url('../../shared//assets/icons/nathan-dumlao-KixfBEdyp64-unsplash 1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
