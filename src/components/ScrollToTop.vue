<script>
	const defaultBtnIcon = "keyboard_arrow_up"

	export default {
  name: 'ScrollToTop',
  el: '#scrollToTop',
  data() {
    return {
      btnIcon: defaultBtnIcon
    }
  },
  methods: {
		onMouseEnter() {
			this.btnIcon = "north"
		},
		onMouseLeave() {
			this.btnIcon = defaultBtnIcon
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
		class="fixed right-0 bottom-0 mr-8 sm:mr-12 mb-8 sm:mb-12 p-1 sm:p-2 border-2 border-yellow-200 rounded-lg flex items-center transition shadow-sm hover:shadow-lg hover:bg-yellow-200"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
		@click="toTop"
		title="Scroll to top :)"
	>
		<span class="material-icons">
			{{btnIcon}}
		</span>
	</button>
</template>

<style>
</style>
