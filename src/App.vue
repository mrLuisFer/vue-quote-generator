<script setup>
import CommonHeader from './components/header/Header.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div id="contaiener" class="dark:bg-blue-900">
    <CommonHeader />
    <router-view></router-view>
    <ScrollToTop />
  </div>
</template>

<style lang="scss">
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
  background: rgb(250, 247, 245);
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem 0.5rem;

  @media (min-width: 640px) {
    padding: 1.5rem 2rem;
  }
}
</style>
