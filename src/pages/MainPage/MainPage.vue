<template>
  <LayoutVue>
    <div class="main">
      <div class="poster">
        <h3 class="poster_title">Незабываемый вкус и прекрасное место.</h3>
        <button class="shop_btn" @click="goToPap">Shop All Products ></button>
      </div>
      <div class="benefit">
        <h3 class="benefit_title">Что ты можешь у нас найти?</h3>
        <div class="benefit_cards">
          <div class="benefit_card">
            <div class="card_image">
              <div class="background_yellow">
                <img  class="card_img" src="../../shared/assets/icons/coffee-cup 1.png" alt="" />
              </div>
            </div>
            <div>
              <h3 class="card_title">Карта напитков</h3>
              <p class="card_text">
                Большой выбор вкусного кофе и натурального чая
              </p>
            </div>
          </div>
          <div class="benefit_card">
            <div class="card_image">
              <img class="card_img"  src="../../shared/assets/icons/пончик.png" alt="" />
            </div>
            <div>
              <h3 class="card_title">Свежая выпечка</h3>
              <p class="card_text">Воздушные пончики, круассаны и сендвичи</p>
            </div>
          </div>
          <div class="benefit_card">
            <div class="card_image">
              <img  class="card_img" src="../../shared/assets/icons/зерна.png" alt="" />
            </div>
            <div>
              <h3 class="card_title">Кофе домой</h3>
              <p class="card_text">
                Кофейные зерна от лучших итальянских производителей
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="slider">
        <h3 class="slider_title">Наши продукты</h3>
        <SliderVue />
      </div>
      <div class="about">
        <div class="about_content">
          <h3 class="about_title">О нас</h3>
          <p class="about_text">
            Наша маленькая, но уютная и известная всему городу, кофейня в центре
            г. Бендеры готова радовать вас вкусными горячими напитками и
            воздушной выпечкой каждый день. В нашем меню вы можете найти напитки
            на любой вкус и на любую погоду. Внашей кофейне каждый найдет то,
            что по душе именно ему, ведь наша основная задача добавить приятных
            ощущений и капельку теплоты в ваш день
          </p>
        </div>
        <div class="about_image">
          <img src="../../shared/assets/img/Mask Group.png" alt="" class="about_img" />
        </div>
      </div>
    </div>
  </LayoutVue>
</template>

<script>
import SliderVue from "../../entites/Slider/Slider.vue";
import LayoutVue from "../../widgets/Layout/Layout.vue";

export default {
  components: {
    LayoutVue,
    SliderVue,
  },

  data() {
    return {};
  },

  methods: {
    goToPap() {
      this.$router.push({ path: "/products/" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MainPage.scss";
</style>
