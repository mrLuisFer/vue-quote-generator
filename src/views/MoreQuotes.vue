<script>
import MoreQuotesFooter from '../components/MoreQuotesView/MoreQuotesFooter.vue'
import MoreQuotesList from '../components/MoreQuotesView/MoreQuotesList.vue'

export default {
  name: 'MoreQuotes',
  el: '#more-quotes',
  data() {
    return {
      quotes: {},
      page: 1,
      disablePage: false,
      loading: true,
    }
  },
  components: {
    'more-quotes-footer': MoreQuotesFooter,
    'more-quotes-list': MoreQuotesList,
  },
  mounted() {
    this.getMoreQuotes()
  },
  methods: {
    async getMoreQuotes() {
      const url = `https://api.quotable.io/quotes?page=${this.page}`
      const res = await fetch(url)
      const data = await res.json()
      this.quotes = data
      this.loading = false
    },
    async nextPage() {
      this.disablePage = false
      this.page++
      await this.getMoreQuotes()
      console.log(this.page)
    },
    async previousPage() {
      if (this.page === 1) {
        this.disablePage = true
        return
      }

      this.page--
      await this.getMoreQuotes()
      console.log(this.page)
    },
  },
}
</script>

<template>
  <section class="container" id="more-quotes">
    <h1 class="text-lg font-bold">List of {{ quotes.count }} quotes:</h1>
    <div v-if="!loading">
      <more-quotes-list :quotes="quotes"></more-quotes-list>
      <more-quotes-footer
        :previousPage="previousPage"
        :nextPage="nextPage"
        :quotes="quotes"
      ></more-quotes-footer>
    </div>
    <div v-else>
      <div class="loader">Loading...</div>
    </div>
  </section>
</template>

<style scoped>
.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ff943d;
  background: -moz-linear-gradient(
    left,
    #ff943d 10%,
    rgba(255, 148, 61, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ff943d 10%,
    rgba(255, 148, 61, 0) 42%
  );
  background: -o-linear-gradient(left, #ff943d 10%, rgba(255, 148, 61, 0) 42%);
  background: -ms-linear-gradient(left, #ff943d 10%, rgba(255, 148, 61, 0) 42%);
  background: linear-gradient(to right, #ff943d 10%, rgba(255, 148, 61, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ff943d;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ff943d;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
