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
    <div class="flex mt-6 mb-4 gap-x-2">
      <button
        :title="quotes.page"
        @click="previousPage"
        :class="disablePage ? 'disable' : 'no-disable'"
	class="border-transparent border-2 hover:border-yellow-200 rounded-md flex items-center p-1 bg-transparent active:bg-yellow-200 hover:bg-yellow-200"
      >
        <span class="material-icons"> chevron_left </span>
      </button>
      <button :title="quotes.page + 1" @click="nextPage" class="border-transparent border-2 hover:border-yellow-200 rounded-md flex items-center p-1 bg-transparent active:bg-yellow-200 hover:bg-yellow-200"
      >
        <span class="material-icons"> chevron_right </span>
      </button>
    </div>
    <p>Page {{ quotes.page }}</p>
  </footer>
</template>

<style></style>
