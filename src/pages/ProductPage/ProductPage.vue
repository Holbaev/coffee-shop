<script>
import Layout from '../../widgets/Layout/Layout.vue';
import ProductsList from '../../widgets/ProductsList/ProductsList.vue';
export default {
    components:{
        Layout,
        ProductsList
    },  
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
    <Layout>
        <div class="products">
          <ProductsList/>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import "./ProductsPage.scss";
</style>
