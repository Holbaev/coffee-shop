<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getProducts } from '../../shared/service/productsService';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      info:[],
    };
  },

  methods: {
    async getData(){
            try{
                const response = await getProducts();
                this.info = response;
            }catch(err){
                console.log(err);
            }
        },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
    <carousel :items-to-show="1.5" :wrap-around="true" autoplay="3000" > 
      <slide v-for="slide in info.products" :key="slide.id">
        <div class="slide">
            <div class="slide_image"><img :src="slide.image"  alt="" class="slide_img"></div>
            <div class="slide_content">
                <h3 class="slide_title">{{ slide.name }}</h3>
                <p class="slide_text">{{ slide.description }}</p>
                <p class="slide_price">{{ slide.price }}</p>
            </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
   
<style lang="scss" scoped>
@import './Sliderr.scss'

</style>
