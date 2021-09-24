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
  <div id="#quote-content">
    <p>Quote</p>
    <div v-for="quote in quotes" :key="quote._id">
      <p>{{ quote.content }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
