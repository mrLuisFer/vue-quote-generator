<script>
export default {
  el: '#quote-author',
  name: 'QuoteAuthor',
  props: {
    authorName: {
      type: String,
      required: true,
    },
    authorSlug: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <article
    id="quote-author"
    class="quote-author inline-block dark:text-gray-50"
  >
    <h1 class="quote-author-name">
      <a
        :href="`https://www.google.com/search?q=${authorSlug}`"
        target="_blank"
      >
        {{ authorName }}
      </a>
      <router-link :to="`/quotes/${authorSlug}`" class="quote-author-name-icon">
        <span
          class="material-icons animate-pulse"
          :title="`Most famous quotes of ${authorName}`"
        >
          arrow_forward
        </span>
      </router-link>
    </h1>
    <p class="quote-author-slug">{{ authorSlug }}</p>
  </article>
</template>

<style scoped lang="scss">
.quote {
  &-author {
    margin: 2rem 0 0 1rem;
    border-left: 2px solid transparent;
    padding-left: 0.5rem;
    transition: border var(--transition);

    @media (min-width: 640px) {
      margin: 4rem 0 0 3rem;
    }

    &:hover {
      border-left: 2px solid var(--secondary);
    }

    &-name {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      line-height: 0rem;

      &-icon {
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }

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
