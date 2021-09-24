<script setup></script>

<template>
  <header class="header">
    <div>
      <router-link to="/quotes">
        <span class="material-icons"> bolt </span>
        <p>All quotes</p>
      </router-link>
    </div>
    <div class="quotes-random">
      <p class="flex">
        Random
        <span class="material-icons"> shuffle </span>
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}

.quotes {
  &-all {
    cursor: pointer;
  }

  &-random {
    cursor: pointer;
  }
}
</style>
