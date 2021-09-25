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
    class="quote"
    id="#quote-content"
  >
    <blockquote class="quote-text">"{{ quote.content }}"</blockquote>
    <div class="quote-author">
      <h1 class="quote-author-name">
        <a
          :href="`https://www.google.com/search?q=${quote.authorSlug}`"
          target="_blank"
        >
          {{ quote.author }}
        </a>
      </h1>
      <p class="quote-author-slug">{{ quote.authorSlug }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.quote {
  margin: 0 auto;
  display: block;
  max-width: 600px;

  &-text {
    height: 200px;
    font-size: 1.7rem;
    line-height: 1.5;
    padding: 1rem 4rem;
    border-left: 5px solid var(--primary);
    display: flex;
    align-items: center;
  }

  &-author {
    margin: 4rem 0 0 4rem;

    &-name {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;

      text-transform: capitalize;

      a {
        color: inherit;
        text-decoration: none;
        opacity: 0.85;
        transition: var(--transition);

        &:hover {
          opacity: 1;
        }
      }
    }

    &-slug {
      font-weight: 400;
      font-size: 0.8rem;
      text-transform: lowercase;
    }
  }
}
</style>
