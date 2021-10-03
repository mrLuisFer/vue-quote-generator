<script>
import HeaderLink from './HeaderLink.vue'

export default {
  name: 'Header',
  el: '#header',
  components: {
    'header-link': HeaderLink,
  },
  data() {
    return {
      currentRoute: this.$router.currentRoute._value.fullPath.toString(),
      goBackHover: false,
    }
  },
  methods: {
    reloadWindow() {
      if (this.currentRoute === '/') {
        window.location.reload()
      } else {
        this.$router.push('/')
      }
    },
    goBack() {
      this.$router.go(-1)
    },
    onMouseEnterOnBackBtn() {
      this.goBackHover = true
    },
    onMouseLeaveOnBackBtn() {
      this.goBackHover = false
    },
  },
}
</script>

<template>
  <header class="header flex-wrap" id="header">
    <div class="header-links">
      <p
        draggable="false"
        @click="goBack"
        class="flex header-allBtn select-none"
        @mouseenter="onMouseEnterOnBackBtn"
        @mouseleave="onMouseLeaveOnBackBtn"
				title="This goes back one page"
      >
        <span class="material-icons header-icon animate-pulse">
          chevron_left
        </span>
        <span
          v-show="goBackHover"
          :class="`transition-opacity delay-150 ${
            goBackHover ? 'opacity-100' : 'opacity-0'
          }`"
        >
          Go back
        </span>
      </p>
      <header-link url="/" iconName="grass">
        <p>Home</p>
      </header-link>
      <header-link url="/quotes" iconName="bolt">
        <p>More quotes</p>
      </header-link>
    </div>
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
    column-gap: 0.3rem;
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
