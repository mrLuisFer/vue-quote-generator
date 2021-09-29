<script>
export default {
  data() {
    return {
      authorParams: this.$route.params.author,
      authorQuoteData: [],
      author: '',
    }
  },
  mounted() {
    this.fetchAuthorQuotes()
  },
  methods: {
    async fetchAuthorQuotes() {
      const url = `https://quotable.io/quotes?author=${this.authorParams}`
      const res = await fetch(url)
      const data = await res.json()
      this.authorQuoteData = data
      console.log(data)

      const authorData = data.results.find((quote) => quote.author)
      this.author = authorData.author
    },
  },
}
</script>

<template>
  <section class="author-container">
    <h1
      class="
        text-3xl
        capitalize
        mb-2
        pl-2
        border-l-4 border-yellow-100
        hover:border-yellow-400
        transition-colors
      "
    >
      {{ author }}
    </h1>
    <p class="text-sm font-semibold my-3">
      {{ authorQuoteData.count }} Most famous quotes:
    </p>
    <article>
      <ul class="list-none">
        <li
          class="
            my-6
            font-serif
            text-lg
            border-l-4 border-yellow-100
            pl-2
            hover:border-red-400
            transition-all
          "
          v-for="authorQuote in authorQuoteData.results"
          :key="authorQuote.author"
        >
          <blockquote>
            {{ authorQuote.content }}
          </blockquote>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss"></style>
