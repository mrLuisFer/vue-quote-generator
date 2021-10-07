<script>
	export default {
  name: 'ScrollToTop',
  el: '#scrollToTop',
  data() {
    return {
      goBackHover: false,
    }
  },
  methods: {
		onMouseEnter() {
			this.goBackHover = true
		},
		onMouseLeave() {
			this.goBackHover = false
		},
		toTop() {
			window.scrollTo({
				top: 0,
				scroll: 'smooth'
			})
		},
  },
}

</script>

<template>
	<button
		id="scrollToTop"
		class="fixed right-0 bottom-0 mr-12 mb-12 p-2 border-2 border-yellow-200 rounded-lg flex items-center transition-all shadow-sm hover:shadow-lg hover:bg-yellow-200"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
		@click="toTop"
		title="Scroll to top :)"
	>
		<span class="material-icons" v-if="goBackHover">
			north
		</span>
		<span class="material-icons" v-else>
			keyboard_arrow_up
		</span>
	</button>
</template>

<style>
</style>
