<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import Home from './views/Home.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style>
/* Global Styles */
:root {
  font-size: 16px;
  --primary: #f9d5a7;
  --secondary: #ffe1af;
  --tertiary: #ffb085;
  --radius: 10px;
  --transition: 0.2s ease-in-out;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: rgb(250, 247, 245);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem 2rem;
}
</style>
