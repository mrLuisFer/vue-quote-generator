<script>
import Loader from '../components/common/Loader.vue'

export default {
  components: {
    'common-loader': Loader,
  },
  data() {
    return {
      authorParams: this.$route.params.author,
      authorQuoteData: [],
      author: '',
      loading: true,
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
      this.loading = false
    },
  },
}
</script>

<template>
  <section v-if="!loading" class="author-container">
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
      <a :href="`https://www.google.com/search?q=${author}`" target="_blank">
        {{ author }}
      </a>
    </h1>
    <p class="text-sm font-semibold my-3">
      {{ authorQuoteData.count }} Most famous quotes:
    </p>
    <article>
      <ul class="list-none">
        <li
          v-for="authorQuote in authorQuoteData.results"
          :key="authorQuote.author"
          class="
            my-6
            text-lg
            border-l-4 border-yellow-100
            pl-2
            hover:border-red-400
            transition-all
          "
        >
          <blockquote>
            {{ authorQuote.content }}
          </blockquote>
        </li>
      </ul>
    </article>
  </section>
  <section v-else>
    <common-loader></common-loader>
  </section>
</template>

<style scoped lang="scss"></style>
