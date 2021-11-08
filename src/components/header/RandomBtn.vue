<script>
export default {
  el: '#random-btn',
  name: 'RandomBtn',
  props: {
    reloadWindow: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      randomBtnText: '',
    }
  },
  methods: {
    handleMouseEnter() {
      this.randomBtnText = 'Reload window'
    },
    handleMouseLeave() {
      this.randomBtnText = ''
    },
  },
}
</script>

<template>
  <button
    id="random-btn"
    class="header-randomBtn block"
    title="This will reload the page"
    @click="reloadWindow"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <p class="flex">
      <span class="material-icons header-icon"> autorenew </span>
      <span class="hidden sm:inline-block">
        {{ randomBtnText }}
      </span>
    </p>
  </button>
</template>

<styles>
</styles>
