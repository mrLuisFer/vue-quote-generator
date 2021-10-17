<script>
export default {
  name: 'GoBackBtn',
  el: '#go-back-btn',
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
  <p
    id="go-back-btn"
    draggable="false"
    class="flex header-allBtn select-none"
    @click="goBack"
    @mouseenter="onMouseEnterOnBackBtn"
    @mouseleave="onMouseLeaveOnBackBtn"
    title="This goes back one page"
  >
    <span class="material-icons header-icon animate-pulse"> chevron_left </span>
    <span
      v-show="goBackHover"
      :class="`transition-opacity delay-150 ${
        goBackHover ? 'opacity-100' : 'opacity-0'
      }`"
    >
      Go back
    </span>
  </p>
</template>

<style></style>
