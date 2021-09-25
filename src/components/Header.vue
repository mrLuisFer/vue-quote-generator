<script>
export default {
  name: 'Header',
  el: '#header',
  methods: {
    reloadWindow() {
      window.location.reload()
    },
  },
}
</script>

<template>
  <header class="header" id="header">
    <router-link to="/quotes" class="flex header-allBtn">
      <span class="material-icons header-icon"> bolt </span>
      <p>More quotes</p>
    </router-link>
    <div
      class="header-randomBtn"
      @click="reloadWindow"
      title="This will reload the page"
    >
      <p class="flex">
        <span class="material-icons header-icon"> autorenew </span>
        Random
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
$gray: #9b9b9b;

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
    position: relative;

    &:hover {
      background: var(--secondary);
      border: 1px solid var(--tertiary);
      transition: var(--transition);

      &::after {
        transition: var(--transition);
        content: 'This will reload the page';
        position: absolute;
        bottom: -3.2rem;
        left: -10px;
        width: 100px;
        background: #242424;
        border-radius: var(--radius);
        padding: 0.5rem;
        font-size: 0.75rem;
        color: #fff;
        font-weight: normal;
      }
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
