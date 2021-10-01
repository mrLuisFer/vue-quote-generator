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
    <ul>
      <li
        v-for="quote in quotes.results"
        :key="quote._id"
        class="
          my-3
          border-l-2 border-red-100
          hover:border-l-4 hover:border-red-300
          transition-colors
          pl-2
          inline-block
          group
        "
      >
        <blockquote class="text-lg max-w-lg leading-7">
          {{ quote.content }}
        </blockquote>
        <h2 class="text-xs font-semibold group-hover:text-blue-600">
          <router-link
            :to="`/quotes/${quote.authorSlug}`"
            class="quote-author-name-icon"
          >
            - {{ quote.author }}
          </router-link>
        </h2>
      </li>
    </ul>
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
  </section>
</template>

<style scoped lang="scss"></style>
