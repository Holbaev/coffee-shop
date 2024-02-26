<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
}
html {
  font-size: 10px;
}
body {
  font-family: "Andika", sans-serif;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 6px; /* Ширина скроллбара */
}

::-webkit-scrollbar-thumb {
  background-color: #69b4ff; /* Цвет скроллбара */
}
</style>
