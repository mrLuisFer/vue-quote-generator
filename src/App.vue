<script setup>
import Header from './components/header/Header.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <Header />
  <router-view></router-view>
  <ScrollToTop />
</template>

<style lang="scss">
/* Global Styles */
:root {
  font-size: 16px;
  --primary: #f9d5a7;
  --secondary: #ffe1af;
  --tertiary: #ffb085;
  --radius: 10px;
  --transition: 0.2s ease-in-out;
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
  background: rgb(250, 247, 245);
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
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
