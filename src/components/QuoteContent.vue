<script>
export default {
  name: 'QuoteContent',
  data() {
    return {
      quotes: [],
    }
  },
  mounted() {
    this.getRandomQuote()
  },
  methods: {
    getRandomQuote() {
      const quote = 'Some quote'
      this.quotes.push(quote)
      console.log(this.quotes)
    },
  },
}
</script>

<template>
  <p>Quote</p>
</template>

<style scoped lang="scss"></style>
