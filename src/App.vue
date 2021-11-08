<script setup>
import CommonHeader from './components/header/Header.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div class="layout dark:bg-gray-800">
    <CommonHeader />
    <router-view></router-view>
    <ScrollToTop />
  </div>
</template>

<style lang="scss" scooped>
/* Global Styles */
:root {
  font-size: 16px;
  --primary: #f9d5a7;
  --secondary: #ffe1af;
  --tertiary: #ffb085;
  --radius: 10px;
  --transition: 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.layout {
  padding: 1.5rem 0.5rem;
  width: 100%;
  min-height: 100vh;
  background: rgb(250, 247, 245);

  @media (min-width: 640px) {
    padding: 1.5rem 2rem;
  }
}
</style>
