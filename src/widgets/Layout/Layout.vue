<template>
  <div>
    <div class="layout">
      <div class="layout_header">
        <HeaderVue />
      </div>
      <div class="layout_content">
        <slot></slot>
      </div>
      <div class="layout_footer">
        <FooterVue />
      </div>
    </div>
  </div>
</template>

<script>
import FooterVue from "./components/Footer/Footer.vue";
import HeaderVue from "./components/Header/Header.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.layout {
  width: 100%;
}
.layout_content {
  width: 100%;
}
.layout_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.layout_content {
  padding-top: 90px;
}
@media screen and (max-width: 900px) {
  .layout_content {
    padding-top: 84px;
  }
}
</style>
