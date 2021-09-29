<script>
import QuoteAuthor from './QuoteAuthor.vue'

export default {
  name: 'QuoteContent',
  el: '#quote-content',
  components: {
    'quote-author': QuoteAuthor,
  },
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
    },
  },
}
</script>

<template>
  <article
    v-for="quote in quotes"
    :key="quote._id"
    class="quote"
    id="#quote-content"
  >
    <blockquote class="quote-text">"{{ quote.content }}"</blockquote>
    <quote-author :authorName="quote.author" :authorSlug="quote.authorSlug" />
  </article>
</template>

<style lang="scss">
.quote {
  margin: 0 auto;
  display: block;
  max-width: 600px;

  &-text {
    height: 200px;
    font-size: 1.7rem;
    line-height: 1.5;
    padding: 1rem 4rem;
    border-left: 5px solid var(--secondary);
    display: flex;
    align-items: center;
    transition: border var(--transition);

    &:hover {
      border-left: 5px solid var(--primary);
    }
  }
}
</style>
