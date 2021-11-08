<script>
import MoreQuotesFooter from '../components/MoreQuotesView/MoreQuotesFooter.vue'
import MoreQuotesList from '../components/MoreQuotesView/MoreQuotesList.vue'
import Loader from '../components/common/Loader.vue'

export default {
  el: '#more-quotes',
  name: 'MoreQuotes',
  components: {
    'more-quotes-footer': MoreQuotesFooter,
    'more-quotes-list': MoreQuotesList,
    'common-loader': Loader,
  },
  data() {
    return {
      quotes: {},
      page: 1,
      disablePage: false,
      loading: true,
    }
  },
  mounted() {
    this.getMoreQuotes()
  },
  methods: {
    async getMoreQuotes() {
      const url = `https://api.quotable.io/quotes?page=${this.page}`
      const res = await fetch(url)
      const data = await res.json()
      this.quotes = data
      this.loading = false
    },
    async nextPage() {
      this.disablePage = false
      this.page++
      await this.getMoreQuotes()
    },
    async previousPage() {
      if (this.page === 1) {
        this.disablePage = true
        return
      }

      this.page--
      await this.getMoreQuotes()
    },
  },
}
</script>

<template>
  <section id="more-quotes">
    <h1 class="text-lg font-bold dark:text-gray-50">
      List of {{ quotes.count }} quotes:
    </h1>
    <div v-if="!loading">
      <more-quotes-list :quotes="quotes"></more-quotes-list>
      <more-quotes-footer
        :previousPage="previousPage"
        :nextPage="nextPage"
        :quotes="quotes"
      ></more-quotes-footer>
    </div>
    <div v-else>
      <common-loader></common-loader>
    </div>
  </section>
</template>

<style scoped></style>
