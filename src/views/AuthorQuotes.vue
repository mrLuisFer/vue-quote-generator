<script>
export default {
  data() {
    return {
      authorParams: this.$route.params.author,
      authorQuoteData: [],
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
    },
  },
}
</script>

<template>
  <section class="author-container">
    <h1 class="author-title">{{ authorParams }}</h1>
    <p class="author-count">{{ authorQuoteData.count }} Most famous quotes:</p>
    <article>
      <ul class="author-list">
        <li
          class="author-list-item"
          v-for="authorQuote in authorQuoteData.results"
          :key="authorQuote.author"
        >
          {{ authorQuote.content }}
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss"></style>
