<script>
export default {
  el: '#dark-mode-toggle',
  name: 'DarkModeToggle',
  methods: {
    toggleDarkMode() {
      const body = document.body
      const bodyClasslist = body.classList
      console.log(bodyClasslist.contains('dark'))
      if (bodyClasslist.contains('dark')) {
        bodyClasslist.remove('dark')
      } else {
        bodyClasslist.add('dark')
      }
    },
  },
}
</script>

<template>
  <label for="darkModeToggle" class="switch">
    <input
      id="darkModeToggle"
      type="checkbox"
      name="darkModeToggle"
      @click="toggleDarkMode"
    />
    <span class="slider round"></span>
  </label>
</template>

<style lang="scss">
$translate: 21px;
$sliderSize: 22px;
$toggleCheckedColor: #2196f3;
$toggleBaseColor: #ccc;
$sliderBaseColor: #fff;
$sliderCheckedColor: var(--primary);

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $toggleBaseColor;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: $sliderSize;
  width: $sliderSize;
  left: 4px;
  bottom: 2.5px;
  background-color: $sliderBaseColor;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $toggleCheckedColor;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX($translate);
  -ms-transform: translateX($translate);
  transform: translateX($translate);
  background-color: $sliderCheckedColor;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
