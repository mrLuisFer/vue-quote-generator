<script>
export default {
  name: 'RandomBtn',
  el: '#random-btn',
}
</script>

<template>
  <div
    class="header-randomBtn"
    @click="reloadWindow"
    title="This will reload the page"
    id="random-btn"
  >
    <p class="flex">
      <span class="material-icons header-icon"> autorenew </span>
      Random
    </p>
  </div>
</template>

<styles>
</styles>
