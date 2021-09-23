<script setup></script>

<template>
  <header class="header">
    <a href="/all" class="flex quotes-all">
      <span class="material-icons"> bolt </span>
      <p>All quotes</p>
    </a>
    <div class="quotes-random">
      <p class="flex">
        Random
        <span class="material-icons"> shuffle </span>
      </p>
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
