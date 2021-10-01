<script>
import MoreQuotesFooter from '../components/MoreQuotesView/MoreQuotesFooter.vue'
import MoreQuotesList from '../components/MoreQuotesView/MoreQuotesList.vue'

export default {
  name: 'MoreQuotes',
  el: '#more-quotes',
  data() {
    return {
      quotes: {},
      page: 1,
      disablePage: false,
    }
  },
  components: {
    'more-quotes-footer': MoreQuotesFooter,
    'more-quotes-list': MoreQuotesList,
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
      console.log(data)
    },
    async nextPage() {
      this.disablePage = false
      this.page++
      await this.getMoreQuotes()
      console.log(this.page)
    },
    async previousPage() {
      if (this.page === 1) {
        this.disablePage = true
        return
      }

      this.page--
      await this.getMoreQuotes()
      console.log(this.page)
    },
  },
}
</script>

<template>
  <section class="container" id="more-quotes">
    <h1 class="text-lg font-bold">List of {{ quotes.count }} quotes:</h1>
    <more-quotes-list :quotes="quotes"></more-quotes-list>
    <more-quotes-footer
      :previousPage="previousPage"
      :nextPage="nextPage"
      :quotes="quotes"
    ></more-quotes-footer>
  </section>
</template>

<style scoped lang="scss"></style>
