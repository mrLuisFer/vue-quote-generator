<script>
import { randomQuote } from 'quotegarden'

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
      randomQuote().then((quote) => {
        this.quotes.push(quote)
      })
    },
  },
}
</script>

<template>
  <p>Quote</p>
</template>

<style scoped lang="scss"></style>
