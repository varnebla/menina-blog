<template>
  <div>
    <Moon
      v-if="currentMode === 'theme-dark'"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      class="fill-current transform scale-75 cursor-pointer"
      :class="currentColor"
      @click="toggleMode"
      key="dark-theme"
      aria-label="Cambiar a modo claro"
    />
    <Sun
      v-else
      viewBox="0 0 24 24"
      width="24"
      height="24"
      class="fill-current transform scale-75 cursor-pointer"
      :class="currentColor"
      @click="toggleMode"
      key="light-theme"
      aria-label="Cambiar a modo oscuro"
    />
  </div>
</template>

<script>
import Moon from '~/assets/svg/Moon.svg'
import Sun from '~/assets/svg/Sun.svg'
export default {
  components: {
    Moon,
    Sun,
  },
  props: ['iconColor', 'changeMode'],
  data: function() {
    return {
      currentMode:
        (process.isClient && localStorage.getItem('theme')) || 'theme-light',
    }
  },
  computed: {
    currentColor: function() {
      return this.iconColor ? this.iconColor : 'text-primary'
    },
  },
  methods: {
    toggleMode: function() {
      this.currentMode =
        this.currentMode === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.theme = this.currentMode
      this.changeMode(this.currentMode)
    },
  },
}
</script>

<style scoped></style>
