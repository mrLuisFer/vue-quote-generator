<script>
import QuoteAuthor from './QuoteAuthor.vue'
import Loader from '../common/Loader.vue'

export default {
  el: '#quote-content',
  name: 'QuoteContent',
  components: {
    'quote-author': QuoteAuthor,
    'common-loader': Loader,
  },
  data() {
    return {
      quotes: [],
      loading: true,
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
      this.loading = false
    },
  },
}
</script>

<template>
  <div v-if="!loading">
    <div
      v-for="quote in quotes"
      id="#quote-content"
      :key="quote._id"
      class="quote"
    >
      <blockquote class="quote-text">"{{ quote.content }}"</blockquote>
      <quote-author :authorName="quote.author" :authorSlug="quote.authorSlug" />
    </div>
  </div>
  <div v-else>
    <common-loader></common-loader>
  </div>
</template>

<style lang="scss">
$sm: 640px;
$md: 768px;

.quote {
  margin: 0 auto;
  display: block;
  margin-top: 2rem;

  @media (min-width: $sm) {
    max-width: 600px;
    margin-top: 1rem;
  }

  @media (min-width: $md) {
    max-width: 700px;
    margin-top: 2.5rem;
  }

  &-text {
    font-size: 1.3rem;
    line-height: 1.5;
    padding: 1.5rem;
    border-left: 5px solid var(--secondary);
    display: flex;
    align-items: center;
    transition: border var(--transition);
    height: 200px;

    @media (min-width: $sm) {
      padding: 1rem 4rem;
      font-size: 1.7rem;
    }

    &:hover {
      border-left: 5px solid var(--primary);
    }
  }
}
</style>
