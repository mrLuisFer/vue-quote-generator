<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import Home from './views/Home.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background: rgb(247, 247, 247);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
}
</style>
