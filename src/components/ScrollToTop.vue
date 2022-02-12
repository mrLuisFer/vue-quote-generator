<script setup>
let defaultBtnIcon = 'keyboard_arrow_up'

function toTop() {
  window.scrollTo({
    top: 0,
    scroll: 'smooth',
  })
}
</script>

<template>
  <button
    id="scrollToTop"
    class="
      fixed
      right-0
      bottom-0
      mr-8
      sm:mr-12
      mb-8
      sm:mb-12
      p-1
      sm:p-2
      border-2 border-yellow-200
      rounded-lg
      flex
      items-center
      transition
      shadow-sm
      hover:shadow-lg hover:bg-yellow-200
      dark:text-gray-50 dark:hover:text-gray-900
    "
    title="Scroll to top"
    @click="toTop"
  >
    <span class="material-icons">
      {{ defaultBtnIcon }}
    </span>
  </button>
</template>

<style></style>
