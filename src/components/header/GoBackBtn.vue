<script>
export default {
  el: '#go-back-btn',
  name: 'GoBackBtn',
  props: {
    onMouseEnterOnBackBtn: {
      required: true,
      type: Function,
    },
    onMouseLeaveOnBackBtn: {
      required: true,
      type: Function,
    },
    goBack: {
      required: true,
      type: Function,
    },
    goBackHover: {
      required: true,
      type: Boolean,
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
    @mouseenter="onMouseEnterOnBackBtn"
    @mouseleave="onMouseLeaveOnBackBtn"
    @click="goBack"
  >
    <span class="material-icons header-icon animate-pulse"> chevron_left </span>
    <span
      v-show="goBackHover"
      :class="`transition-opacity delay-150 hidden sm:block ${
        goBackHover ? 'opacity-100' : 'opacity-0'
      }`"
    >
      Go back
    </span>
  </button>
</template>

<style></style>
