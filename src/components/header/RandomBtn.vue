<script>
  const defaultBtnText = "Random"

export default {
  name: 'RandomBtn',
  el: '#random-btn',
  data() {
    return {
      randomBtnText: defaultBtnText
    }
  },
  props: {
    reloadWindow: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleMouseEnter() {
      this.randomBtnText = "Reload window"
    },
    handleMouseLeave() {
      this.randomBtnText = defaultBtnText
    }
  }
}
</script>

<template>
  <button
    class="header-randomBtn"
    @click="reloadWindow"
    title="This will reload the page"
    id="random-btn"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <p class="flex">
      <span class="material-icons header-icon"> autorenew </span>
      {{randomBtnText}}
    </p>
  </button>
</template>

<styles>
</styles>
