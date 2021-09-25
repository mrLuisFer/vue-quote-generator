<script>
export default {
  data() {
    return {
      authorParams: this.$route.params.author,
      auhorQuotes: []
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
      this.authorQuotes = data
      // console.log(data)
    },
  },
}
</script>

<template>
  <section class="author-quotes">
    <p>author: {{ authorParams }}</p>
    
  </section>
</template>

<style scoped lang="scss"></style>
