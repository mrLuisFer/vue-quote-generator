<script setup></script>

<template>
  <header class="header">
    <a href="/all" class="flex quotes-all">
      <span class="material-icons"> bolt </span>
      All quotes
    </a>
    <div class="flex quotes-random">
      <p>Random</p>
      <span class="material-icons"> shuffle </span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}

.quotes-all {
  cursor: pointer;
}
.quotes-random {
  cursor: pointer;
}
</style>
