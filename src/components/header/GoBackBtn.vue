<script>
export default {
  el: '#go-back-btn',
  name: 'GoBackBtn',
  props: {
    goBack: {
      required: true,
      type: Function,
    },
  },
}
</script>

<template>
  <button
    id="go-back-btn"
    draggable="false"
    class="
      flex
      header-allBtn
      select-none
      dark:text-gray-50 dark:hover:text-gray-900
    "
    title="This goes back one page"
    type="button"
    @click="goBack"
  >
    <span class="material-icons header-icon animate-pulse"> chevron_left </span>
  </button>
</template>

<style></style>
