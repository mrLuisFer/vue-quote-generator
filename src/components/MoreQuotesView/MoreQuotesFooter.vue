<script>
export default {
  name: 'MoreQuotesFooter',
  el: '#more-quotes-footer',
  props: {
    quotes: {
      type: Object,
    },
    disablePage: {
      type: Boolean,
    },
    previousPage: {
      type: Function,
    },
    nextPage: {
      type: Function,
    },
  },
}
</script>

<template>
  <footer>
    <div>
      <button
        :title="quotes.page"
        @click="previousPage"
        :class="disablePage ? 'disable' : 'no-disable'"
      >
        <span class="material-icons"> chevron_left </span>
      </button>
      <button :title="quotes.page + 1" @click="nextPage">
        <span class="material-icons"> chevron_right </span>
      </button>
    </div>
    <p>Page {{ quotes.page }}</p>
  </footer>
</template>

<style></style>
