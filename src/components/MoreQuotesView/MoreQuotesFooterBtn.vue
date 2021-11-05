<script>
export default {
  el: '#more-quotes-footer-btn',
  name: 'MoreQuotesFooterBtn',
  props: {
    iconName: {
      type: String,
    },
    quotesPage: {
      type: Number,
    },
    onClick: {
      type: Function,
    },
    disablePage: {
      type: Boolean,
    },
  },
}
</script>

<template>
  <button
    :title="quotesPage"
    :class="disablePage ? 'disable' : 'no-disable'"
    class="
      border-transparent border-2
      hover:border-yellow-200
      rounded-md
      flex
      items-center
      p-1
      bg-transparent
      active:bg-yellow-300
      hover:bg-yellow-200
      transition-colors
    "
    @click="onClick"
  >
    <span class="material-icons"> {{ iconName }}</span>
  </button>
</template>

<style></style>
