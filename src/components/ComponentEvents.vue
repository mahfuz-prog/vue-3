<script setup>
import Popup from './Popup.vue'
import { ref } from 'vue'

let closeSatus = ref(false)
let showSatus = ref(true)
let value = null

let showPopup = () => {
  closeSatus.value = true
  if (closeSatus) {
    showSatus.value = false
  }
  if (value !== null) {
    value = null
  }
}

// val is coming from the custom event in Popup.vue
let closePopup = ref((val) => {
  value = val
  closeSatus.value = false
  showSatus.value = true
})
</script>

<template>
  <button v-show="showSatus" @click="showPopup">Show Popup</button>

  <!-- @close is a custom event created in Popup.vue -->
  <Popup v-show="closeSatus" @close="closePopup" />
  <h1>{{ value }}</h1>
</template>

<style scoped>

</style>