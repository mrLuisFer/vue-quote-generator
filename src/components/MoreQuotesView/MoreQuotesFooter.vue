<script>
import MoreQuotesFooterBtn from './MoreQuotesFooterBtn.vue'

export default {
  el: '#more-quotes-footer',
  name: 'MoreQuotesFooter',
  components: {
    'footer-btn': MoreQuotesFooterBtn,
  },
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
      <footer-btn
        :iconName="'chevron_left'"
        :quotesPage="quotes.page"
        :onClick="previousPage"
        :disablePage="disablePage"
      ></footer-btn>
      <footer-btn
        :iconName="'chevron_right'"
        :quotesPage="quotes.page"
        :onClick="nextPage"
        :disablePage="disablePage"
      ></footer-btn>
    </div>
    <p
      class="
        font-semibold
        hover:text-green-600
        dark:text-green-200 dark:hover:text-green-500
        transition-colors
        inline-block
      "
    >
      Page {{ quotes.page }}
    </p>
  </footer>
</template>

<style></style>
