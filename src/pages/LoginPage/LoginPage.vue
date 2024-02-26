<script>
import Loginvue from '../../widgets/Login/Login.vue';
export default {
    name: "CoffeeShopLoginPage",
    data() {
        return {};
    },
    mounted() { },
    methods: {},
    components: { Loginvue }
};
</script>

<template>
    <div class="login_wrapper">
        <Loginvue/>
    </div>
</template>

<style lang="scss" scoped>
.login_wrapper{
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
@import "./LoginPage.scss";
</style>
