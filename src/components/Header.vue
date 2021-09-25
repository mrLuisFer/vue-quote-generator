<script setup></script>

<template>
  <header class="header" id="header">
    <router-link to="/quotes" class="flex header-link">
      <span class="material-icons"> bolt </span>
      <p>All quotes</p>
    </router-link>
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

  &-link {
    text-decoration: none;
    color: inherit;
  }
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
