<script>
export default {
  el: '#reload-btn',
  name: 'ReloadBtn',
  props: {
    reloadWindow: {
      type: Function,
      required: true,
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
    </p>
  </button>
</template>

<styles>
</styles>
