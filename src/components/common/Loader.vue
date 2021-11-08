<script>
export default {
  el: '#common-loader',
  name: 'Loader',
}
</script>

<template>
  <div id="common-loader" class="loader"></div>
</template>

<style lang="scss" scooped>
$loaderSize: 65px;

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: $loaderSize;
  height: $loaderSize;
  border-radius: 50%;
  border-left-color: var(--tertiary);

  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
