<script setup>
import Layout from './Layout.vue'
import { ref, watch } from 'vue'

let volume = ref(0)

watch(volume, (newValue, oldValue) => {
  console.log(newValue, oldValue)

  if (newValue > oldValue && newValue === 4) {
    alert('Very high volume')
  }
})
</script>

<template>
    <Layout>
  		<template #practice>
        <h1>Volume level (0-20)</h1>
        <h2>Current volume {{ volume }}</h2>
        <button @click="volume += 2">Increase</button>
        <button @click="volume -= 2">Decrease</button><br>
  		</template>
	</Layout>
</template>

<style scoped>

</style>