<script setup>
import HeaderLink from './HeaderLink.vue'
import GoBackBtn from './GoBackBtn.vue'
import ReloadBtn from './ReloadBtn.vue'
import DarkModeToggle from './DarkModeToggle.vue'

function reloadWindow() {
  let self = this
  const currentRoute = self.$router.currentRoute._value.fullPath.toString()

  if (currentRoute === '/') {
    window.location.reload()
  } else {
    self.$router.push('/')
  }
}

function goBack() {
  let self = this
  self.$router.go(-1)
}
</script>

<template>
  <header id="header" class="header flex-wrap">
    <div class="header-links">
      <GoBackBtn :goBack="goBack" />
      <HeaderLink url="/" iconName="home" title="Go to home">
        <p>Home</p>
      </HeaderLink>
      <HeaderLink url="/quotes" iconName="bolt" title="List of quotes">
        <p>More quotes</p>
      </HeaderLink>
    </div>
    <div class="flex gap-x-2">
      <DarkModeToggle />
      <ReloadBtn :reloadWindow="reloadWindow" />
    </div>
  </header>
</template>

<style lang="scss">
$gray: #9b9b9b;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  &-links {
    display: flex;

    @media (min-width: 640px) {
      column-gap: 0.3rem;
    }
  }

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
    }
  }

  &-allBtn {
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: background var(--transition);
    text-decoration: none;
    color: inherit;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background: var(--secondary);
      border: 1px solid rgba($gray, 0.2);

      &:active {
        background: var(--primary);
      }
    }
  }

  &-icon {
    font-size: 0.95rem;
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
