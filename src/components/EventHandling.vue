<script setup>
import Layout from './Layout.vue'
import { ref } from 'vue'

let count = ref(0)

function increment(event, num) {
	count.value = count.value += num
}

function decrement() {
	count.value = count.value -+ 1
}
</script>

<template>
    <Layout>
		<template #practice>
			<!-- multiple method can be used in comma seperated on event -->
			<h1>{{ count }}</h1>
			<button @click="increment(event, 1)">Increase</button>
			<button @click="decrement">Decrease</button><br>
		</template>
	</Layout>
</template>

<style scoped>

</style>