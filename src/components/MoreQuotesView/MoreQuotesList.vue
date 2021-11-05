<script>
export default {
  el: '#more-quotes-list',
  name: 'MoreQuotesList',
  props: {
    quotes: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<template>
  <ul class="flex flex-col items-start gap-y-8 mt-4">
    <li
      v-for="quote in quotes.results"
      :key="quote._id"
      class="
        border-l-2 border-red-100
        hover:border-l-4 hover:border-red-300
        transition-colors
        pl-2
        inline-block
        group
      "
    >
      <blockquote class="text-base md:text-lg max-w-lg leading-7">
        {{ quote.content }}
      </blockquote>
      <h2 class="mt-2 md:mt-0 text-xs font-semibold group-hover:text-blue-600">
        <router-link
          :to="`/quotes/${quote.authorSlug}`"
          class="quote-author-name-icon"
          :title="`Click to see more quotes of ${quote.author}`"
        >
          -
          <span class="hover:underline">
            {{ quote.author }}
          </span>
        </router-link>
      </h2>
    </li>
  </ul>
</template>

<style></style>
