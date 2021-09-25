<script setup></script>

<template>
  <header class="header" id="header">
    <router-link to="/quotes" class="flex header-allBtn">
      <span class="material-icons header-icon"> bolt </span>
      <p>All quotes</p>
    </router-link>
    <div class="header-randomBtn">
      <p class="flex">
        <span class="material-icons header-icon"> autorenew </span>
        Random
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  &-randomBtn {
    padding: 0.5rem;
    border-radius: var(--radius);
    background: var(--tertiary);
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    transition: background var(--transition);
    border: 1px solid transparent;

    &:hover {
      background: var(--secondary);
      border: 1px solid var(--tertiary);
    }
  }

  &-allBtn {
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: background var(--transition);
    text-decoration: none;
    color: inherit;
    border: 1px solid transparent;

    &:hover {
      $gray: #9b9b9b;
      background: rgba($gray, 0.1);
      border: 1px solid rgba($gray, 0.2);
    }
  }

  &-icon {
    font-size: 0.95rem;
    margin-right: 0.3rem;
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
