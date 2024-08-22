<script setup>
import Layout from './Layout.vue'
import { ref, computed } from 'vue'

const firstName = ref('Mahfuzur')
const lastName = ref('Rahman')

const fullName = computed({
  // getter
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
    <Layout>
		<template #practice>
			<h1>Fullname - {{firstName}} {{lastName}}</h1>
			<h1>Fullname getter - {{ fullName }}</h1>
			<button @click="fullName = 'hola name'">Setter</button><br>
		</template>
	</Layout>
</template>

<style scoped>

</style>