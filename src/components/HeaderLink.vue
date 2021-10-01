<script>
export default {
  name: 'HeaderLink',
  props: {
    url: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: 'bolt',
    },
  },
}
</script>

<template>
  <router-link
    :to="url"
    class="flex header-allBtn select-none"
    draggable="false"
  >
    <span class="material-icons header-icon"> {{ iconName }} </span>
    <slot></slot>
  </router-link>
</template>

<style lang="scss"></style>
