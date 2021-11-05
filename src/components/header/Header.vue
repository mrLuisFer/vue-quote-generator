<script>
import HeaderLink from './HeaderLink.vue'
import GoBackBtn from './GoBackBtn.vue'
import RandomBtn from './RandomBtn.vue'

export default {
  el: '#header',
  name: 'CommonHeader',
  components: {
    'header-link': HeaderLink,
    'goback-btn': GoBackBtn,
    'random-btn': RandomBtn,
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
  <header id="header" class="header flex-wrap">
    <div class="header-links">
      <goback-btn
        :onMouseEnterOnBackBtn="onMouseEnterOnBackBtn"
        :onMouseLeaveOnBackBtn="onMouseLeaveOnBackBtn"
        :goBack="goBack"
        :goBackHover="goBackHover"
      ></goback-btn>
      <header-link url="/" iconName="home" title="Go to the home view">
        <p>Home</p>
      </header-link>
      <header-link url="/quotes" iconName="bolt" title="List of quotes">
        <p>More quotes</p>
      </header-link>
    </div>
    <random-btn :reloadWindow="reloadWindow" />
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

      /* &::after {
        transition: var(--transition);
        content: 'This will reload the page';
        position: absolute;
        bottom: -5rem;
        width: 100px;
        background: #242424;
        border-radius: var(--radius);
        padding: 0.5rem;
        font-size: 0.75rem;
        color: #fff;
        font-weight: normal;
      } */
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

    @media (min-width: 640px) {
      margin-right: 0.3rem;
    }
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
