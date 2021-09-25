<script>
export default {
  name: 'MoreQuotes',
  el: '#more-quotes',
  data() {
    return {
      quotes: [],
      page: 1,
      disablePage: false,
    }
  },
  mounted() {
    this.getMoreQuotes()
    this.previousPage()
  },
  methods: {
    async getMoreQuotes() {
      const url = `https://api.quotable.io/quotes?page=${this.page}`
      const res = await fetch(url)
      const data = await res.json()
      this.quotes = data

      // console.log(data)
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
    <h1>List of {{ quotes.count }} quotes</h1>
    <ul>
      <li v-for="quote in quotes.results" :key="quote._id">
        <p>{{ quote.content }}</p>
        <p>{{ quote.author }}</p>
      </li>
    </ul>
    <footer>
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
    </footer>
  </section>
</template>

<style scoped lang="scss"></style>
