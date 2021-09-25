<script>
export default {
  name: 'QuoteContent',
  el: '#quote-content',
  data() {
    return {
      quotes: [],
    }
  },
  mounted() {
    this.getRandomQuote()
  },
  methods: {
    async getRandomQuote() {
      const url = 'https://api.quotable.io/random'
      const res = await fetch(url)
      const quote = await res.json()
      this.quotes.push(quote)
      console.log(this.quotes)
    },
  },
}
</script>

<template>
  <article
    v-for="quote in quotes"
    :key="quote._id"
    class="quote-container"
    id="#quote-content"
  >
    <h1 class="quote-text">
      <blockquote>
        {{ quote.content }}
      </blockquote>
    </h1>
    <h2 class="quote-author">{{ quote.author }}</h2>
    <p class="quote-author-slug">{{ quote.authorSlug }}</p>
  </article>
</template>

<style scoped lang="scss"></style>
