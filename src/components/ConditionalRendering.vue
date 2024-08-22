<script setup>
import Layout from './Layout.vue'

let num = 'hola'
let display = true
let showElement = true
</script>

<template>
    <Layout>
		<template #practice>
			<!-- if, else, elseif conditional -->
			<!-- if condition false elements dose not stay in the dom -->
			<template v-if="display">
				<h1 v-if="num === 0">The number is {{num}}</h1>
				<h1 v-else-if="num < 0">Negetive Number</h1>
				<h1 v-else-if="num > 0">Positive Number</h1>
				<h1 v-else>Not a number</h1>
			</template>

			<!-- v-show -->
			<!-- this is a efficient approach -->
			<!-- if condition true elements stay in the dom, -->
			<!-- only change display property  -->
			<h1 v-show="showElement">v-show</h1>
		</template>
	</Layout>
</template>

<style scoped>

</style>